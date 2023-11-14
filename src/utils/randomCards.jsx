import SingleCard from '../components/SingleCard';

export const getRandomCards = (currentIndex, fullDataSet) => {
  const randomIndices = [];
  while (randomIndices.length < 3) {
    const randomIndex = Math.floor(Math.random() * fullDataSet.length);
    if (randomIndex !== currentIndex && !randomIndices.includes(randomIndex)) {
      randomIndices.push(randomIndex);
    }
  }

  const randomCards = randomIndices.map(index => {
    const professional = fullDataSet[index];
    return (
      <SingleCard
        key={professional.id}
        id={professional.id}
        image={professional.image}
        name={professional.fullName}
        body={professional.occupation}
      />
    );
  });

  return randomCards;
};
