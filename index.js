import express from 'express';
import cors from 'cors';

const app= express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    const userId = 'Abinavkrishnaa_R_03122003'; 
  
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        user_id: userId,
        email: 'ar0970@srmist.edu.in',
        roll_number: 'RA2111003020538',
        numbers: [],
        alphabets: [],
        highest_alphabet: []
      });
    }
  
    const numbers = [];
    const alphabets = [];
    data.forEach(item => {
      if (!isNaN(item)) {
        numbers.push(item);
      } else if (typeof item === 'string' && item.length === 1 && /[a-zA-Z]/.test(item)) {
        alphabets.push(item);
      }
    });
  
    const highestAlphabet = alphabets.length > 0
      ? [alphabets.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' })).pop()]
      : [];
  
    res.json({
      is_success: true,
      user_id: userId,
      email: 'ar0970@srmist.edu.in',
      roll_number: 'RA2111003020538',
      numbers,
      alphabets,
      highest_alphabet: highestAlphabet
    });
  });
  
app.get("/bfhl",(req,res)=>{
    res.json({
        operation_code : 1
    })
})
  

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})