import app from './app';

const PORT: string = '1337';

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
