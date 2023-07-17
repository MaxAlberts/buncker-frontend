import PageNavigationItem from '../entities/PageNavigationItem'
import Music from '../routes/MusicPage';
import Home from '../routes/HomePage';
import Contact from '../routes/ContactPage';
import Tour from '../routes/TourPage';
import Subscribe from '../routes/SubscribePage';

// These items are used to create the menu. A new page should be added here
// to make sure it is added to the menu and the router.
export const MENU_LIST = [
    new PageNavigationItem('/home', 'Home', <Home/>),
    new PageNavigationItem('/music', 'Music', <Music/>),
    new PageNavigationItem('/tour', 'Tour', <Tour/> ),
    new PageNavigationItem('/contact', 'Contact', <Contact/>),
    new PageNavigationItem('/subscribe', 'Subscribe', <Subscribe/>)
]