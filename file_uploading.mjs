import * as AWS from 'aws-sdk'
const s3 = new AWS.S3();



export const handler = async (event) => {
  const bucketName = "exampple-bucket";
  const fileName = event.fileName;
  const fileContent = event.fileContent;

  if(!fileContent || !fileName) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "file content and name are required" })
    };
  }

  try {
    const params = {
      Bucket: bucketName,
      Key: fileName,
      Body: fileContent,
    };

    const data = await s3.upload(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "File uploaded successfully", data }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error uploading file", error }),
    };
  }


};
