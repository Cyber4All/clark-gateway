import { sentry } from './../logging/sentry';
import { AccessValidator, DataStore, Responder } from './../interfaces/interfaces';
import { LearningObjectRepoFileInteractor } from './LearningObjectRepoFileInteractor';

// FIXME: DRY violated by accessStatus repitition (promise structure maybe?)

export async function create(accessValidator: AccessValidator, dataStore: DataStore, responder: Responder, learningObject, user: any) {
  findAccessStatus(accessValidator, user)
    .then(userid => {
      // create new LearningObject(userid, data_as_json)
      dataStore.createLearningObject(userid, learningObject)
        .then((learningObjectID) => {
          responder.sendLearningObject(learningObjectID);
        })
        .catch((error: string) => {
          sentry.logError(error);
          if (error.match(/duplicate\s+key/g).length > 0) {
            responder.sendOperationError({ message: `Please enter a unique name for this Learning Object.`, status: 400 });
          } else
            responder.sendOperationError({ message: `There was an error creating new Learning Object. ${error}`, status: 400 });
        });
    })
    .catch((error) => {
      sentry.logError(error);
      responder.invalidAccess();
    });
}

export async function update(accessValidator: AccessValidator, dataStore: DataStore, responder: Responder, learningObjectID, learningObject, user) {
  findAccessStatus(accessValidator, user)
    .then(userid => {
      // Patch data_as_json via dataStore call (else send error ->)
      dataStore.updateLearningObject(userid, learningObjectID, learningObject)
        .then(() => {
          responder.sendOperationSuccess();
        })
        .catch((error) => {
          sentry.logError(error);

          if (error.match(/duplicate\s+key/g).length > 0) {
            responder.sendOperationError({ message: `Please enter a unique name for this Learning Object.`, status: 400 });
          } else
            responder.sendOperationError({ message: `There was an error creating new learning object. ${error}`, status: 400 });
        });
    })
    .catch((error) => {
      sentry.logError(error);

      responder.invalidAccess();
    });
}

export async function destroy(accessValidator: AccessValidator, dataStore: DataStore, responder: Responder, learningObjectID, user) {
  findAccessStatus(accessValidator, user)
    .then(userid => {
      // Delete LO from data store (else send error ->)
      dataStore.deleteLearningObject(learningObjectID)
        .then(() => {
          let learningObjectFile = new LearningObjectRepoFileInteractor();
          learningObjectFile.deleteAllFiles(this.dataStore, responder, learningObjectID, user);
        })
        .catch((error) => {
          sentry.logError(error);

          responder.sendOperationError({ message: `There was an error deleting learning object. ${error}`, status: 400 });
        });
      // Send verification ->
    })
    .catch((error) => {
      sentry.logError(error);

      responder.invalidAccess();
    });
}

export async function read(accessValidator: AccessValidator, dataStore: DataStore, responder: Responder, user) {
  findAccessStatus(accessValidator, user)
    .then(userid => {
      // Fetch all Learning Objects associated with the userid
      dataStore.getMyLearningObjects(userid)
        .then((learningObjects) => {
          responder.sendLearningObjects(
            learningObjects
          );
        })
        .catch((error) => {
          sentry.logError(error);

          responder.sendOperationError({ message: `There was an error fetching user's learning objects. ${error}`, status: 400 });
        });

    })
    .catch((error) => {
      sentry.logError(error);

      responder.invalidAccess();
    });
}

export async function readOne(accessValidator: AccessValidator, dataStore: DataStore, responder: Responder, learningObjectID, user) {
  findAccessStatus(accessValidator, user)
    .then((userid) => {
      dataStore.getLearningObject(user.userid, learningObjectID)
        .then((learningObject) => {
          responder.sendLearningObject(
            learningObject
          );
        })
        .catch((error) => {
          sentry.logError(error);

          responder.sendOperationError({ message: `There was an error fetching user's learning object. ${error}`, status: 400 });
        });
    })
    .catch((error) => {
      sentry.logError(error);

      responder.invalidAccess();
    });

}

function findAccessStatus(accessValidator: AccessValidator, user): Promise<string> {
  return new Promise((resolve, reject) => {
    let accessStatus = accessValidator.authorize(user);
    if (accessStatus.isAccessable) {
      resolve(accessStatus.userid);
    } else reject(new Error('Invalid Access'));
  });
}
