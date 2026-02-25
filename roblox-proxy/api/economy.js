export default async function handler(req, res) {
  const assetId = req.query.id;

  if (!assetId) {
    return res.status(400).json({ error: "Missing asset ID" });
  }

  try {
    const response = await fetch(
      `https://economy.roblox.com/v2/assets/${assetId}/details`
    );

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch Roblox API" });
  }
}