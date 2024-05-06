import { client } from "@/app/lib/sanity";
import DeckCategories from "@/components/DeckCategories";

const getData = async () => {
  const query = `*[_type == 'product' ]{
        _id,
          name,
          description,
          images,
          price,
          price_id,
          "slug": slug.current,
          "categories": categories[]->{
          name
        }
      }`;

  const data = await client.fetch(query);
  return data;
};

const OurDecks = async () => {
  const decks = await getData();
  return (
    <div>
      <DeckCategories decks={decks} />
    </div>
  );
};

export default OurDecks;
