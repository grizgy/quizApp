import { useState } from "react";
import {Box, Card, Typography, FormControl, CardActions, Button, Select, InputLabel, MenuItem, SelectChangeEvent, FormLabel, TextField, CardContent, Stack} from "@mui/material" 
import Slider from '@mui/material/Slider';
import Switch from '@mui/joy/Switch';

function Categories () {

    const [Category, setCategory] = useState('');
    const [Difficulty, setDifficulty] = useState('');

    const handleCategoryChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value);
    };

    const handleDifficultyChange = (event: SelectChangeEvent) => {
        setDifficulty(event.target.value);
    };
    

    return (
        <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={Category}
          onChange={handleCategoryChange}
          label="Category"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"music"}>Music</MenuItem>
          <MenuItem value={"sport_and_leisure"}>Sport and leisure</MenuItem>
          <MenuItem value={"film_and_tv"}>Film and tv</MenuItem>
          <MenuItem value={"arts_and_literature"}>Arts and literature</MenuItem>
          <MenuItem value={"history"}>History</MenuItem>
          <MenuItem value={"society_and_culture"}>Society and culture</MenuItem>
          <MenuItem value={"science"}>Science</MenuItem>
          <MenuItem value={"geography"}>Geography</MenuItem>
          <MenuItem value={"food_and_drink"}>Food and drink</MenuItem>
          <MenuItem value={"general_knowledge"}>General knowledge</MenuItem>
        </Select>
      </FormControl>


      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Difficulty</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={Difficulty}
          onChange={handleDifficultyChange}
          label="Category"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"easy"}>Easy</MenuItem>
          <MenuItem value={"medium"}>Medium</MenuItem>
          <MenuItem value={"hard"}>Hard</MenuItem>
        </Select>
      </FormControl>

      <Typography id="discrete-slider" gutterBottom>
        Number of questions
      </Typography>
      <Slider
      defaultValue={5}
      aria-labelledby="discrete-slider-small-steps"
      sx={{
        width: 300,
        color: 'success.main',
      }}
      step={1}
        marks
        min={1}
        max={30}
        valueLabelDisplay="auto"
    />

            <CardActions>
            <Button variant='contained' size='large'>START QUIZ</Button>
            </CardActions>

      
       <Typography id="discrete-slider" gutterBottom>
        Turn timer on
      </Typography>
      <Switch sx={{ ml: 1 }} />
    

    </div>
    )


}

export default Categories;