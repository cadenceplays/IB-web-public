import './App.css';
import { Route, Routes } from 'react-router-dom';
import {
  Layout, 
  Home, 
  Contact, 
  History, 
  Ourteam,
  Ourteam20232024, 
  Whatwedo, 
  Volunteer,
  Weekly, 
  Specialevents,
  Pastevents,
  Artgallery, 
  Upcomingevents, 
  Upcomingweekly,
  Documents, 
  Training,
  Login,
  Signup,
  Forgotpassword,
  Changepassword,
  Profile, 
  Servicehours,
  Donate, 
  IBAdmin,
  Eventrecords, 
  Eventsignup, 
  Eventservicehour, 
  Eventstats,
  Eventprofile,
  Eventonetoone,
  Eventsignupmod,
  Eventspecialolympics,
  Eventfcm,
  Eventsignupcontact,
  Specialolympics,
  Specialolympicsreg,
  Nopage, 
  ScrollToTop,
} from './pages';
import { AuthContextProvider } from './context/Authcontext';
import { messaging } from './firebase';
import { useEffect } from 'react';
import { onMessage, getToken } from 'firebase/messaging';
import { Uselocalstorage } from "./components";

function App() {

  // The below block of code is used to handle FCM messaging, a.k.a push notification
  // const [fcmToken, setFcmToken] = Uselocalstorage("ibFcmToken", "");
  // useEffect(() => {
  //   const generateToken = async () => {
  //     const permission = await Notification.requestPermission();
  //     console.log(permission);
  //     if(permission === "granted") {
  //       const token = await getToken(messaging, {
  //         vapidKey: "BGNwJNMGq6T_SgJvYlBcjSwQFwNSqGKVx4oNNRgTvimojfFu1jzyJzWwqXd-LO_7GG1DGT75xXSuiRd4AMRiJeM",
  //       });
  //       console.log("FCM token: ", token);
  //       setFcmToken(token); // store token value to local storage;
  //     }
  //   }

  //   generateToken();

  //   onMessage(messaging, (payload) => {
  //     console.log("FCM foreground: ", payload);
  //     new Notification(payload.notification.title, {
  //       body: payload.notification.body,
  //       icon: payload.notification.image,
  //     });
  //   });

  // }, []);
  // The above block of code is used to handle FCM messaging, a.k.a push notification

  return (
    <div className="App">
      <AuthContextProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="history" element={<History />} />
            <Route path="ourteam" element={<Ourteam />} />
            <Route path="ourteam20232024" element={<Ourteam20232024 />} />
            <Route path="whatwedo" element={<Whatwedo />} />
            <Route path="volunteer" element={<Volunteer />} />
            <Route path="pastevents" element={<Pastevents />} />
            <Route path="artgallery" element={<Artgallery />} />
            <Route path="weekly" element={<Weekly />} />
            <Route path="specialevents" element={<Specialevents />} />
            <Route path="upcomingevents" element={<Upcomingevents />} />
            <Route path="upcomingweekly" element={<Upcomingweekly />} />
            <Route path="documents" element={<Documents />} />
            <Route path="training" element={<Training />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forgotpassword" element={<Forgotpassword />} />
            <Route path="changepassword" element={<Changepassword />} />
            <Route path="profile" element={<Profile />} />
            <Route path="servicehours" element={<Servicehours />} />
            <Route path="donate" element={<Donate />} />
            <Route path="ibadmin" element={<IBAdmin />} />
            <Route path="eventrecords" element={<Eventrecords />} />
            <Route path="eventsignup" element={<Eventsignup />} />
            <Route path="eventservicehour" element={<Eventservicehour />} />
            <Route path="eventstats" element={<Eventstats />} />
            <Route path="eventprofile" element={<Eventprofile />} />
            <Route path="eventonetoone" element={<Eventonetoone />} />
            <Route path="eventsignupmod" element={<Eventsignupmod />} />
            <Route path="eventspecialolympics" element={<Eventspecialolympics />} />
            <Route path="eventfcm" element={<Eventfcm />} />
            <Route path="eventsignupcontact" element={<Eventsignupcontact />} />            
            <Route path="specialolympics" element={<Specialolympics />} />
            <Route path="specialolympicsreg" element={<Specialolympicsreg />} />
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </div>
    
  );
}

export default App;
