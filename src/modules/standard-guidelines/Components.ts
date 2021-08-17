/**
  levels: string[];
 * @swagger
 * components:
 *      schemas:
 *          FrameworkDocument:
 *            properties:
 *              _id:
 *                type: string
 *                required: true
 *                description: the id of the framework in the database
 *                example: 611a818a80000000000024e9
 *              name:
 *                type: string
 *                required: true
 *                description: The name of the framework
 *                example: Some Framework
 *              author:
 *                 type: string
 *                 required: true
 *                 description: The author of the of the framework
 *                 example: Some Author
 *              source: 
 *                 type: string
 *                 required: true
 *                 description: The source of the framework
 *                 example: Some Source
 *              description:
 *                 type: string
 *                 required: true
 *                 description: The description of the framework
 *                 example: Some Description
 *          Guideline:  
 *            properties:
 *              _id:
 *                type: string
 *                required: true
 *                description: the id of the framework in the database
 *                example: 611a818a80000000000024e9
 *              name:
 *                type: string
 *                required: true
 *                description: The name of the framework
 *                example: Some Framework
 *              levels:
 *                 type: array
 *                 required: true
 *                 description: The level the guideline applies to
 *                 example: ["high"]
 *              year: 
 *                 type: string
 *                 required: true
 *                 description: The year that the guideline applies to
 *                 example: 2021
 *              frameworkId:
 *                 type: ObjectId
 *                 required: true
 *                 description: The framework id that the guideline is associated to
 *                 example: ObjectId("60d0dc0192019201f5e74716")
 *              guideline:
 *                 type: string
 *                 required: true
 *                 description: The description of the guideline
 *                 example: Some Description
 *          SearchItemDocument:
 *            properties:
 *              _id:
 *                type: string
 *                required: true
 *                description: the id of the framework in the database
 *                example: 611a818a80000000000024e9
 *              levels:
 *                type: array
 *                required: true
 *                description: The level the guideline applies to
 *                example: ["high"]
 *              year: 
 *                type: string
 *                required: true
 *                description: The year that the guideline applies to
 *                example: 2021
 *              frameworkName:
 *                type: string
 *                required: true
 *                description: The name of the framework
 *                example: Some Framework
 *              author:
 *                type: string
 *                required: true
 *                description: The author of the of the framework
 *                example: Some Author
 *              frameworkDescription:
 *                type: string
 *                required: true
 *                description: The description of the framework
 *                example: Some Description
 *              guidelineName:
 *                type: string
 *                required: true
 *                description: The name of the framework
 *                example: Some Framework
 *              guidelineDescription:
 *                type: string
 *                required: true
 *                description: The description of the guideline
 *                example: Some Description
 *          FrameworkSearchResults:
 *            properties:
 *                total:
 *                  type: number
 *                  example: 200
 *                  required: true
 *                  description: The total number of framework documents
 *                results:
 *                  type: array
 *                  required: true
 *                  description: The array of framework documents
 *                  items:
 *                    $ref: '#/components/schemas/FrameworkDocument'
 *          SearchResults:
 *            properties:
 *              total:
 *                type: number
 *                example: 200
 *                required: true
 *                description: The total number of framework documents
 *              results:
 *                type: array
 *                required: true
 *                description: The array of Search Item Documents
 *                items:
 *                  $ref: '#/components/schemas/SearchItemDocument'
 */