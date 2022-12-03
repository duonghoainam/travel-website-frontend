// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "POST"){
    const data = req.body;
    
  }
  res.status(400).json({ message: 'John Doe' })
}
