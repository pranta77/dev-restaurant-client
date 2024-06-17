import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuimg from "../../../assets/menu/banner3.jpg";
import pizzaimg from "../../../assets/menu/pizza-bg.jpg";
import dessertimg from "../../../assets/menu/dessert-bg.jpeg";
import saladimg from "../../../assets/menu/salad-bg.jpg";
import soupimg from "../../../assets/menu/soup-bg.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Dev Restaurant || Menu</title>
      </Helmet>

      {/* main cover */}
      <Cover
        img={menuimg}
        title="our Menu"
        detail="would you like to try a dish"
      ></Cover>
      <SectionTitle
        SubHeading="don't miss"
        heading="today's offer"
      ></SectionTitle>
      {/* offerd menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory
        items={dessert}
        title="Dessert"
        img={dessertimg}
      ></MenuCategory>
      <MenuCategory items={pizza} title="Pizza" img={pizzaimg}></MenuCategory>
      <MenuCategory items={salad} title="Salad" img={saladimg}></MenuCategory>
      <MenuCategory items={soup} title="Soup" img={soupimg}></MenuCategory>
    </div>
  );
};

export default Menu;
