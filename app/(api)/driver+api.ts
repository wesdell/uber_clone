import { neon } from "@neondatabase/serverless";

export async function GET() {
  try {
    const sql = neon(`${process.env.DATABASE_CONNECTION_STRING}`);
    const response = await sql`
        SELECT id, first_name, last_name, profile_image_url, car_image_url, car_seats, rating
        FROM drivers
    `;

    return Response.json(JSON.stringify({ data: response }));
  } catch (error) {
    console.log(error);
    return Response.json({ error: error });
  }
}
