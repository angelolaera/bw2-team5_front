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
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3Mjc0MjI0NTYsImV4cCI6MTcyNzY4MTY1Niwic3ViIjoiMjNiMWJmMTMtN2Q2Ni00NmVkLTgwMjItN2FlYTc3MzI1NTAwIn0.m7ZF1DldPS3JNi8LPsJdUPHkBGmO1JWeNcJ-q5h-TV44QoUlBlrQLfA6zyMIzY1e4Y1tTZEJydWJ8wlc_4FRJQ",
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
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3Mjc0MjI0NTYsImV4cCI6MTcyNzY4MTY1Niwic3ViIjoiMjNiMWJmMTMtN2Q2Ni00NmVkLTgwMjItN2FlYTc3MzI1NTAwIn0.m7ZF1DldPS3JNi8LPsJdUPHkBGmO1JWeNcJ-q5h-TV44QoUlBlrQLfA6zyMIzY1e4Y1tTZEJydWJ8wlc_4FRJQ",
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
