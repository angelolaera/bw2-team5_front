const token="eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3Mjc0MjgzNDksImV4cCI6MTcyNzY4NzU0OSwic3ViIjoiMjNiMWJmMTMtN2Q2Ni00NmVkLTgwMjItN2FlYTc3MzI1NTAwIn0.17Uur-9O31-gGaSFzAxNcavdXYtu6JLePaLBjGuhf-aKVuI6jlVKKo52wRjO3sKIaMCoOt2WCBv1mQnj9Eq-pA"

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
          "Bearer "+token,
      },
    });

    if (!response.ok) {
      throw new Error(`Errore: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Errore durante la get:", error);
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
          "Bearer "+token,
      },
    });

    if (!response.ok) {
      throw new Error(`Errore: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Errore durante l'update:", error);
  }
};

const Delete = async (url) => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization:
        "Bearer "+token,
      },
    });

    if (!response.ok) {
      throw new Error(`Errore: ${response.status} - ${response.statusText}`);
    } else console.log("eliminato con successo");
  } catch (error) {
    console.error("Errore durante l'eliminazione':", error);
  }
};

export { PostAuthService, getClient, PutClient, Delete };
