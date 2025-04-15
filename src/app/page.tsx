import { neon } from "@neondatabase/serverless";
import { revalidatePath } from "next/cache";
const sql = neon(`${process.env.DATABASE_URL}`);

export default async function Page() {
  const result = await sql`SELECT * FROM users`;
  async function createAction(formData: FormData) {
    "use server";
    const username = formData.get("username");
    const possword = formData.get("possword");
    await sql`INSERT INTO users (username, possword) VALUES (${username}, ${possword})`;
    revalidatePath("/");
  }
  return (
    <div>
      Page
      <div>
        <form action={createAction}>
          <div>
            用户名：
            <input type="text" className="border" name="username" />
          </div>
          <div>
            密码：
            <input type="text" className="border" name="possword" />
          </div>
          <button type="submit">注册</button>
        </form>
      </div>
      <ul>
        {result.map((item) => (
          <li key={item.id}>
            {item.username},{item.possword}
          </li>
        ))}
      </ul>
    </div>
  );
}
