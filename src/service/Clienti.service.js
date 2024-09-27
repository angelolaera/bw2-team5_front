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
    // console.log("data "+data);
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
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3MjczOTIyNzIsImV4cCI6MTcyNzY1MTQ3Miwic3ViIjoiMzllZWY1MGEtOWIyYy00N2I5LTg2ZDYtNzk1YTY5ZDljYzEwIn0.6fxL_mp3mce8Vn7edFIJ0ZcNstV50b3IPNg4uMfSQXdCh2sqwMgJtXvOsLujrsUyZG83JViXbM-qMUSNYbEHvw",
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

const PutClient = async (url, clienti) => {
  try {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(clienti),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3MjczOTIyNzIsImV4cCI6MTcyNzY1MTQ3Miwic3ViIjoiMzllZWY1MGEtOWIyYy00N2I5LTg2ZDYtNzk1YTY5ZDljYzEwIn0.6fxL_mp3mce8Vn7edFIJ0ZcNstV50b3IPNg4uMfSQXdCh2sqwMgJtXvOsLujrsUyZG83JViXbM-qMUSNYbEHvw",
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

export { PostAuthService, getClient, PutClient };
