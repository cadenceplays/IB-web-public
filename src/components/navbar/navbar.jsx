import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiMenuLine, RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";
import './navbar.css';
import logo from '../../assets/IB_logo.png';
import { Button, Line } from '../';
import { UserAuth } from "../../context/Authcontext";
import { db } from "../../firebase";
import { doc, getDoc, getDocs, query, collection, where } from "firebase/firestore";
import Swal from 'sweetalert2';

const Navbar = () => {
  const { logOut, user, memberIndex, setMemberIndex } = UserAuth();
  const [userData, setUserData] = useState();
  const [adminData, setAdminData] = useState();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  }

  const handleMemberSwitch = (index) => {
    setMemberIndex(index);
    console.log(index);
  }

  useEffect(() => {
    const getAdminData = async () => {
      setAdminData(null);
      const ref = doc(db, "app_admin", user.email);   // get user's info from "app_admin" collection
      try {
        const docSnap = await getDoc(ref);
        if (docSnap.exists && docSnap.data()) {
          setAdminData(docSnap.data());
        }
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: 'Error',
          text: `Get doc error: ${error}`,
          icon: 'error',
          iconColor: '#A5C727',
          confirmButtonText: 'OK',
          confirmButtonColor: '#A5C727'
        });
      }
    }

    const getUserData = async () => {
      setUserData(null);
      // const ref = doc(db, "users", user.email);
      const q = query(collection(db, "users"), where("email", "==", user.email));
      let tempUserData = [];

      try {
        // const docSnap = await getDoc(ref);
        // if (docSnap.exists && docSnap.data()) {
        //   setUserData(docSnap.data());
        // }

        const docSnap = await getDocs(q);
        docSnap.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          tempUserData.push(doc.data());
        });
        setUserData(tempUserData);

      } catch (error) {
        console.log(error);
        Swal.fire({
          title: 'Error',
          text: `Get doc error: ${error}`,
          icon: 'error',
          iconColor: '#A5C727',
          confirmButtonText: 'OK',
          confirmButtonColor: '#A5C727'
        });
      }
    }

    if (user && user.email) {
      getUserData();
      getAdminData();
    }

  }, [user])

  console.log("navbar: userData: ", userData);
  console.log("navbar: adminData: ", adminData);

  return (
    <div className="navbar_container">
      <div className="navbar">
        {/* hamburger menu (invisible for larger screen), uses the dropdown menu script */}
        <div className='navbar-menu navbar-dropdown' data-dropdown>
          <RiMenuLine className="navbar-menu-toggle-ri navbar-dropdown-link" data-dropdown-button size={27} />
          <div className="navbar-dropdown-menu">
            <div className="navbar-links-item">About</div>
            <div className="navbar-links-subitem">
              <p><Link to="/whatwedo">About us <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>
              <p><Link to="/ourteam">Our leaders <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>
              <p><Link to="/pastevents">News <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>
              <p><Link to="/history">History <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>
              <p><Link to="/contact">Contact <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>
            </div>
            
            <div className="navbar-links-item">Attend</div>
            <div className="navbar-links-subitem">
              <p><Link to="/weekly">Weekly activities <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>
              <p><Link to="/specialevents">Special events <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>
              <p><Link to="/specialolympics">Special Olympics <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>
              <p><Link to="/upcomingevents">Sign up for upcomings <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>
            </div>
            
            <div className="navbar-links-item">Contribute</div>
            <div className="navbar-links-subitem">
              <p><Link to="/volunteer">Volunteer <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>
              <p><Link to="/donate">Donate <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>
              <p><Link to="/artgallery">Art gallery <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>
            </div>

            <div className="navbar-links-item">Resource</div>
            <div className="navbar-links-subitem">
              <p><Link to="/documents">Related documents <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>
              <p><Link to="/training">Volunteer training <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>
              <p><a href="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/manual%2FIB%20Web%20Quick%20Manual.pdf?alt=media&token=e727a1b4-4081-4927-a2a4-6bad6bd6c60d" download="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/manual%2FIB%20Web%20Quick%20Manual.pdf?alt=media&token=e727a1b4-4081-4927-a2a4-6bad6bd6c60d" target="_blank" rel="noopener">Website quick manual <RiArrowRightSLine className="navbar-menu-ri" /></a></p>
            </div>
            
            <div className="navbar-links-item">User</div>
            <div className="navbar-links-subitem">
              {user?.email ?
                (
                  <> {/* user signed in already */}
                    {/* Hi {user.email} */}
                    <Button type="button greenButton" text="Sign out" onClick={handleSignOut} />

                    {/* if the user is Admin, then show link of "Admin page" */}
                    {(adminData?.role && adminData.role === "admin") && <p><Link to="/ibadmin">Admin page <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>}

                    <p><Link to="/profile">Profile <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>

                    {/* can only change password when NOT using Google sign in */}
                    {!(user.email.match(/gmail.com/gi)) && <p><Link to="/changepassword">Change password <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>}

                    {/* if the user's role is Volunteer, then show link of "Service hours" */}
                    {(userData && userData[memberIndex]?.role && userData[memberIndex].role === "Volunteer") && <p><Link to="/servicehours">Service hours <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>}

                    {/* list names of all members associated to this user/email. memberIndex is context state to store the selected member index */}
                    {userData && userData.map((userDoc, key) => (
                      (key === memberIndex)?
                        <Button type="button greenButton" text={userDoc.name} onClick={() => handleMemberSwitch(key)} key={key}/>
                        :
                        <Button type="button whiteButton" text={userDoc.name} onClick={() => handleMemberSwitch(key)} key={key}/>
                    ))}
                  </>
                )
                :
                (
                  <Link to="/login">
                    <Button type="button greenButton" text="Sign in" />
                  </Link>
                )
              }
            </div>
          </div>
        </div>

        {/* International Buddy logo */}
        <div className="navbar-logo">
          <Link to="/"><img src={logo} alt="Logo" /></Link>
        </div>

        {/* Dropdown menu (invisible for smaller screen), dropdown menu script in /public/script.js */}
        <div className="navbar-links-container">
          <div className="navbar-dropdown" data-dropdown>
            <div className="navbar-dropdown-link" data-dropdown-button>About <RiArrowDownSLine className="navbar-menu-ri" data-dropdown-button /></div>
            <div className="navbar-dropdown-menu">
              <p><Link to="/whatwedo">About us <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>
              <p><Link to="/ourteam">Our leaders <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>
              <p><Link to="/pastevents">News <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>
              <p><Link to="/history">History <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>
              <p><Link to="/contact">Contact <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>
            </div>
          </div>
          
          <div className="navbar-dropdown" data-dropdown>
            <div className="navbar-dropdown-link" data-dropdown-button>Attend <RiArrowDownSLine className="navbar-menu-ri" data-dropdown-button /></div>
            <div className="navbar-dropdown-menu">
              <p><Link to="/weekly">Weekly activities <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>
              <p><Link to="/specialevents">Special events <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>
              <p><Link to="/specialolympics">Special Olympics <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>
              <p><Link to="/upcomingevents">Sign up for upcomings <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>
            </div>
          </div>

          <div className="navbar-dropdown" data-dropdown>
            <div className="navbar-dropdown-link" data-dropdown-button>Contribute <RiArrowDownSLine className="navbar-menu-ri" data-dropdown-button /></div>
            <div className="navbar-dropdown-menu">
              <p><Link to="/volunteer">Volunteer <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>
              <p><Link to="/donate">Donate <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>
              <p><Link to="/artgallery">Art gallery <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>
            </div>
          </div>

          <div className="navbar-dropdown" data-dropdown>
            <div className="navbar-dropdown-link" data-dropdown-button>Resource <RiArrowDownSLine className="navbar-menu-ri" data-dropdown-button /></div>
            <div className="navbar-dropdown-menu">
              <p><Link to="/documents">Related documents <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>
              <p><Link to="/training">Volunteer training <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>
              <p><a href="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/manual%2FIB%20Web%20Quick%20Manual.pdf?alt=media&token=e727a1b4-4081-4927-a2a4-6bad6bd6c60d" download="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/manual%2FIB%20Web%20Quick%20Manual.pdf?alt=media&token=e727a1b4-4081-4927-a2a4-6bad6bd6c60d" target="_blank" rel="noopener">Website quick manual <RiArrowRightSLine className="navbar-menu-ri" /></a></p>
            </div>
          </div>

          <div className="navbar-dropdown" data-dropdown>
            <div className="navbar-dropdown-link" data-dropdown-button>User <RiArrowDownSLine className="navbar-menu-ri" data-dropdown-button /></div>
            <div className="navbar-dropdown-menu">
              {user?.email ?
                (
                  <> {/* user signed in already */}
                    {/* Hi {user.email} */}
                    <Button type="button greenButton" text="Sign out" onClick={handleSignOut} />

                    {/* if the user is Admin, then show link of "Admin page" */}
                    {(adminData?.role && adminData.role === "admin") && <p><Link to="/ibadmin">Admin page <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>}

                    <p><Link to="/profile">Profile <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>

                    {/* can only change password when NOT using Google sign in */}
                    {!(user.email.match(/gmail.com/gi)) && <p><Link to="/changepassword">Change password <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>}

                    {/* if the user's role is Volunteer, then show link of "Service hours" */}
                    {(userData && userData[memberIndex]?.role && userData[memberIndex].role === "Volunteer") && <p><Link to="/servicehours">Service hours <RiArrowRightSLine className="navbar-menu-ri" /></Link></p>}

                    {/* list names of all members associated to this user/email. memberIndex is context state to store the selected member index */}
                    {userData && userData.map((userDoc, key) => (
                      (key === memberIndex)?
                        <Button type="button greenButton" text={userDoc.name} onClick={() => handleMemberSwitch(key)} key={key}/>
                        :
                        <Button type="button whiteButton" text={userDoc.name} onClick={() => handleMemberSwitch(key)} key={key}/>
                    ))}
                  </>
                )
                :
                (
                  <Link to="/login">
                    <Button type="button greenButton" text="Sign in" />
                  </Link>
                )
              }
            </div>
          </div>
        </div>

        {/* Donate button */}
        <div className='navbar-donate'>
          {user?.email ?
            <Button type="button greenButton" text="Sign out" onClick={handleSignOut} />
            :
            <Link to="/login">
              <Button type="button greenButton" text="Sign in" />
            </Link>
          }
          {/* <Link to="/donate"><Button type="button greenButton" text="Donate" /></Link> */}
        </div>

      </div>
      <Line color="--green-color" width="100%" />
    </div>
  )
}

export default Navbar