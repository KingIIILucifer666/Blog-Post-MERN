import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";

//Bucket Name
const s3Bucket = "accblogbucket";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
});

export const getImage = async (req, res) => {
  const id = req.params.id;
  const bucketParams = {
    Bucket: s3Bucket,
    Key: id,
  };
  const data = await s3Client.send(new GetObjectCommand(bucketParams));

  const contentType = data.ContentType;
  const srcString = await data.Body.transformToString("base64");

  const imgSrc = `data:${contentType};base64, ${srcString}`;

  res.json(imgSrc);
};

export const addImage = async (req, res) => {
  const file = req.files[0];
  console.log(file);
  const bucketParams = {
    Bucket: s3Bucket,
    Key: file.originalname,
    Body: file.buffer,
  };
  const data = await s3Client.send(new PutObjectCommand(bucketParams));
  res.json(data);
};

export const deleteImage = async (req, res) => {};
