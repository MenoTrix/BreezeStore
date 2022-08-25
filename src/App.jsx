import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { ModalContextProvider } from "./context/ModalContext";
import SubCategoryContext from "./context/SubCategoryContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import { CartContextProvider } from "./context/CartContext";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ScrollArrow from "./components/scrollArrow/ScrollArrow";
import Modal from "./components/modal/Modal";
import ProdectedRoute from "./components/ProdectedRoute";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import FavoritesList from "./pages/FavoritesList";
import CartList from "./pages/CartList";
import Chicken from "./pages/Chicken";
import Account from "./pages/auth/Account";
import Keto from "./pages/Keto";
import Vegetables from "./pages/Vegetables";
import Supplements from "./pages/Supplements";
import Snacks from "./pages/Snacks";
import Fruit from "./pages/Fruit";
import LowCarb from "./pages/LowCarb";
import Meals from "./pages/Meals";
import Vegan from "./pages/Vegan";
import Search from "./pages/Search";
import Meat from "./pages/Meat";
import Bakery from "./pages/Bakery";
import NotFound from "./pages/NotFound";
import { AccountProvider } from "./context/AccountContext";
import { CartProvider } from "react-use-cart";
import Newlyadded from "./pages/Newlyadded";
import ForgotPassword from "./pages/auth/ForgotPassword";
import KetoAdmin from "./components/admin/keto/Keto";
import VeganAdmin from "./components/admin/vegan/Vegan";
import ChickenAdmin from "./components/admin/chicken/Chicken";
import SnackAdmin from "./components/admin/snack/Snack";
import FruitsAdmin from "./components/admin/fruits/Fruits";
import MeatAdmin from "./components/admin/meat/Meat";
import BakeAdmin from "./components/admin/bakaries/Bakeries";
import VegetablesAdmin from "./components/admin/vegetables/Vegetables";
import HomeAdmin from "./components/admin/home/HomeAdmin";
function App() {
  return (
    <AuthContextProvider>
      <ModalContextProvider>
        <CartContextProvider>
          <CartProvider>
            <FavoritesProvider>
              <Navbar />
              <Modal />
              <ScrollArrow />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="chicken" element={<Chicken />} />
                <Route path="supplements" element={<Supplements />} />
                <Route path="snacks" element={<Snacks />} />
                <Route path="fruit" element={<Fruit />} />
                <Route path="keto" element={<Keto />} />
                <Route path="vegetables" element={<Vegetables />} />
                <Route path="meals" element={<Meals />} />
                <Route path="meat" element={<Meat />} />
                <Route path="lowcarb" element={<LowCarb />} />
                <Route path="vegan" element={<Vegan />} />
                <Route path="bakery" element={<Bakery />} />
                <Route path="addedmeal" element={<Newlyadded />} />
                <Route path="search/:id" element={<Search />} />
                <Route path="forgotpassword" element={<ForgotPassword />} />
                {/* <Route path="adminpanel" element={<HomeAdmin />} />
                <Route path="adminpanel/keto" element={<KetoAdmin />}></Route>
                <Route path="adminpanel/vegan" element={<VeganAdmin />}></Route>
                <Route
                  path="adminpanel/chicken"
                  element={<ChickenAdmin />}
                ></Route>
                <Route path="adminpanel/snack" element={<SnackAdmin />}></Route>
                <Route
                  path="adminpanel/fruits"
                  element={<FruitsAdmin />}
                ></Route>
                <Route path="adminpanel/bake" element={<BakeAdmin />}></Route>
                <Route path="adminpanel/meat" element={<MeatAdmin />}></Route> */}
                {/* <Route path="/adminpaneltest" element={<HomeAdmin />}></Route> */}
                <Route
                  path="adminpaneltest/vegetables"
                  element={<VegetablesAdmin />}
                ></Route>
                <Route
                  path="account"
                  element={
                    <AccountProvider>
                      <Account />
                    </AccountProvider>
                  }
                />
                <Route
                  path="meat"
                  element={
                    <SubCategoryContext>
                      <Meat />
                    </SubCategoryContext>
                  }
                />
                <Route
                  path="bakery"
                  element={
                    <SubCategoryContext>
                      <Bakery />
                    </SubCategoryContext>
                  }
                />
                <Route
                  path="lowcarb"
                  element={
                    <SubCategoryContext>
                      <LowCarb />
                    </SubCategoryContext>
                  }
                />
                <Route
                  path="vegan"
                  element={
                    <SubCategoryContext>
                      <Vegan />
                    </SubCategoryContext>
                  }
                />
                <Route
                  path="meals"
                  element={
                    <SubCategoryContext>
                      <Meals />
                    </SubCategoryContext>
                  }
                />
                <Route
                  path="favoritesList"
                  element={
                    <ProdectedRoute>
                      <AccountProvider>
                        <FavoritesList />
                      </AccountProvider>
                    </ProdectedRoute>
                  }
                />
                <Route
                  path="cartList"
                  element={
                    <ProdectedRoute>
                      <CartList />
                    </ProdectedRoute>
                  }
                />
                <Route path="*" exact={true} element={<NotFound />} />
              </Routes>

              <Footer />
            </FavoritesProvider>
          </CartProvider>
        </CartContextProvider>
      </ModalContextProvider>
    </AuthContextProvider>
  );
}

export default App;
