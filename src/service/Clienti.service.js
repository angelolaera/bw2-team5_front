const PostAuthService = async (url, formRegister) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(formRegister),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Errore: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error("Errore durante la registrazione:", error);
  }
};

const getClient = async (url) => {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3MjczOTIxMTMsImV4cCI6MTcyNzY1MTMxMywic3ViIjoiMzllZWY1MGEtOWIyYy00N2I5LTg2ZDYtNzk1YTY5ZDljYzEwIn0.Xmjz5v3_hN0dBTGeGlrSsdoryn9PAqffFdhW1VTDLPf58pQYWSiaJILVLOv7rZzbS3wYzPdZ3Qq8bxDh_fdTGg",
      },
    });

    if (!response.ok) {
      throw new Error(`Errore: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Errore durante la registrazione:", error);
  }
};

export { PostAuthService,getClient };
