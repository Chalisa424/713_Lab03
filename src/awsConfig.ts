import { S3Client } from "@aws-sdk/client-s3";

//ในไฟล์ awsConfig.ts ต้องเพิ่มการ export ตัวแปร s3Client เพื่อให้สามารถนำเข้ามาใช้ในไฟล์อื่นได้
export const s3Client = new S3Client({
      credentials: {
        accessKeyId: "84aed39a07692c7633051a00f18dd76d",
        secretAccessKey:
          "f6deff1757fd126d8489ca92c6eda629ccb87cee133d02fd8c1ecd21fc3facf6"
      },
      endpoint: "https://bdumnkcovenyjqzubruw.supabase.co/storage/v1/s3",
      region: "ap-southeast-1",
      forcePathStyle: true
      
      
    });
    