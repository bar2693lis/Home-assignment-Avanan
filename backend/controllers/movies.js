export const getAllMovies = async (req, res) => {
  try {
    const response = await fetch("https://swapi.dev/api/films/");
    if (!response.ok) {
      throw new Error("Failed to fetch.");
    }
    const data = await response.json();
    res.status(200).json(data.results);
  } catch (error) {
    console.log("Error in getAllMovies controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
