export default async function LoginTeacher(email, password) {

    const payload = {
        email, password
    }

    try {
        const response = await fetch("https://alpha-edu.herokuapp.com/login/teacher",
            {
                method: "POST",
                body: JSON.stringify(payload),
            }
        )

        const result = await response.json();
        return result;

    } catch (error) {
        console.error(error)
    }

}