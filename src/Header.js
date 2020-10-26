import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {useStateValue} from "./StateProvider";
import {auth} from './firebase';

function Header() {
    const [{basket,user}] = useStateValue();
    
    console.log(basket);
    const login = () =>{
        if(user){
            auth.signOut();
        }
    };
    return (
        <nav className="header">
           {/* logo on the left -> img*/}
           <Link to ="/">
           <img className="header__logo"
           src="https://theross.ml/0:/project/amazon1-removebg-preview12.png"
           alt="amazon"
           />
           </Link>
           {/*search box */}
           <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
           </div>
           

           {/*3 links */}
           <div className="header__nav">
               {/*1 link */}
               <Link to={!user && "login"} className="header__link">
                   <div onClick={login} className="header__option">
    <span className="header__optionLineOne">Hello {user?.email}</span>
                       <span className="header__optionLineTwo">{user ?'Sign out':'Sign In'}</span>
                   </div>
               </Link>

               {/*2 link */}
               <Link to="/" className="header__link">
                   <div className="header__option">
                       <span className="header__optionLineOne">Returns</span>
                       <span className="header__optionLineTwo">& Orders</span>
                   </div>
               </Link>

               {/*3 link */}
               <Link to="/" className="header__link">
                   <div  className="header__option">
                       <span className="header__optionLineOne">Your</span>
                       <span className="header__optionLineTwo">Prime</span>
                   </div>
               </Link>

               {/*4th link*/}
               <Link to="/checkout" className="header__link">
                   <div className="header__optionBasket">
                   {/*shopping basket icon*/}
                   <ShoppingBasketIcon/>
                   {/*number of items in the basket*/}
                   <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>

                   </div>
               </Link>

           </div>
           
        </nav>
    );
}

export default Header
