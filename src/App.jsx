import "./App.css";
import { IoPersonCircle } from "react-icons/io5";
import { BiSolidContact } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io5";
import { MdRoomPreferences } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdWorkHistory } from "react-icons/md";
import { BsRecordCircle } from "react-icons/bs";
import { PiGraduationCapFill } from "react-icons/pi";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FaAsterisk } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { TiPlusOutline } from "react-icons/ti";
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";
import { ImFloppyDisk } from "react-icons/im";
import { GrResume } from "react-icons/gr";
import { TbBowling } from "react-icons/tb";
import { FaChess } from "react-icons/fa";
import { GiPokerHand } from "react-icons/gi";
import { FaRaspberryPi } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { GiDart } from "react-icons/gi";
import { FaFootballBall } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { FaDog } from "react-icons/fa";
import { TbBrandTesla } from "react-icons/tb";
import { FaBible } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="page">
        <div className="header">
          <div className="header_prof_pic">
            <img src="src/assets/profile.png"></img>
          </div>
          <div className="header_info_right">
            <div className="header_info_name">
              <h1>Clinton Scheible</h1>
              <h4>
                Full Stack Engineering | Personnel Administration | Customer
                Service
              </h4>
            </div>
            <div className="header_info_links">
              <p class="nav-links">
                <a href="#option1">PROFILE</a> |
                <a href="#option2">EMPLOYMENT</a> |
                <a href="#option3">EDUCATION</a> |<a href="#option4">SKILLS</a>{" "}
                |<a href="#option5">CONTACT</a>
              </p>
            </div>
          </div>
        </div>
        <div className="center">
          <div className="center_left">
            <div className="center_left_title">
              <div className="icon">
                <IoPersonCircle
                  style={{
                    marginTop: "0px",
                    fontSize: "50px",
                    color: "black",
                  }}
                />
              </div>
              <div className="icon_title">
                <h1>PROFILE</h1>
              </div>
            </div>
            <div className="center_left_info">
              <p>
                After spending over two decades in the service industry and
                personnel administration, I’ve decided it’s time to start
                building something in tech. I studied IT in college and have
                continued exploring it as a hobby ever since. Discovering Python
                a few years ago reignited my passion for technology and
                problem-solving.
              </p>

              <p>
                I’m eager to apply the skills I’ve developed in the service
                industry — teamwork, organization, communication, and leadership
                — to a career in IT. I’m ready to get my foot in the door, in
                any capacity, and I’m excited for the opportunities the tech
                industry has to offer.
              </p>
            </div>

            <div className="center_left_title">
              <div className="icon">
                <GiSkills style={{ fontSize: "50px", color: "black" }} />
              </div>

              <div className="icon_title">
                <h1>TECH SKILLS</h1>
              </div>
            </div>
            <div className="skills_section">
              <div className="skills_section_icon">
                <h4>JavaScript</h4>
              </div>
              <div className="skills_section_rating">
                <GoDotFill />
                <GoDotFill />
                <GoDotFill />
                <GoDotFill />
                <GoDotFill />
                <GoDotFill />
                <GoDotFill />
                <GoDotFill />
                <GoDotFill />
                <GoDot />
              </div>
            </div>
            <div className="skills_section">
              <div className="skills_section_icon">
                <h4>SQL/NoSQL</h4>
              </div>
              <div className="skills_section_rating">
                <GoDotFill />
                <GoDotFill />
                <GoDotFill />
                <GoDotFill />
                <GoDotFill />
                <GoDotFill />
                <GoDotFill />
                <GoDot />
                <GoDot />
                <GoDot />
              </div>
            </div>
            <div className="skills_section">
              <div className="skills_section_icon">
                <h4>Python</h4>
              </div>
              <div className="skills_section_rating">
                <GoDotFill />
                <GoDotFill />
                <GoDotFill />
                <GoDotFill />
                <GoDotFill />
                <GoDotFill />
                <GoDotFill />
                <GoDotFill />
                <GoDot />
                <GoDot />
              </div>
            </div>
            <div className="skills_section">
              <div className="skills_section_icon">
                <h4>C++</h4>
              </div>
              <div className="skills_section_rating">
                <GoDotFill />
                <GoDotFill />
                <GoDotFill />
                <GoDotFill />
                <GoDot />
                <GoDot />
                <GoDot />
                <GoDot />
                <GoDot />
                <GoDot />
              </div>
            </div>
            <div className="skills_section">
              <div className="skills_section_icon">
                <h4>CCNA</h4>
              </div>
              <div className="skills_section_rating">
                <GoDotFill />
                <GoDotFill />
                <GoDotFill />
                <GoDotFill />
                <GoDotFill />
                <GoDotFill />
                <GoDot />
                <GoDot />
                <GoDot />
                <GoDot />
              </div>
            </div>
            <div className="skills_section">
              <div className="skills_section_icon">
                <h4>AWS</h4>
              </div>
              <div className="skills_section_rating">
                <GoDotFill />
                <GoDotFill />
                <GoDotFill />
                <GoDotFill />
                <GoDotFill />
                <GoDot />
                <GoDot />
                <GoDot />
                <GoDot />
                <GoDot />
              </div>
            </div>
            <div className="center_left_title">
              <div className="icon">
                <BiSolidContact style={{ fontSize: "50px", color: "black" }} />
              </div>

              <div className="icon_title">
                <h1>CONTACT</h1>
              </div>
            </div>
            <div className="center_left_title">
              <div className="icon">
                <MdOutlineLocationOn
                  style={{
                    marginTop: "20px",
                    fontSize: "30px",
                    color: "black",
                  }}
                />
              </div>
              <div className="center_left_sub_info">San Antonio, Texas</div>
            </div>
            <div className="center_left_title">
              <div className="icon">
                <FaPhoneAlt
                  style={{ marginTop: "5px", fontSize: "20px", color: "black" }}
                />
              </div>
              <div className="center_left_sub_info">210.885.1017</div>
            </div>
            <div className="center_left_title">
              <div className="icon">
                <MdOutlineAttachEmail
                  style={{ marginTop: "5px", fontSize: "20px", color: "black" }}
                />
              </div>
              <div className="center_left_sub_info">
                <a href="mailto:doug_scheible@yahoo.com">
                  doug_scheible@yahoo.com
                </a>
              </div>
            </div>
            <div className="center_left_title">
              <div className="icon">
                <IoLogoGithub
                  style={{ marginTop: "5px", fontSize: "20px", color: "black" }}
                />
              </div>
              <div className="center_left_sub_info">
                <a
                  href="https://github.com/DougyShy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/DougyShy
                </a>
              </div>
            </div>
            <div className="center_left_title">
              <div className="icon">
                <MdRoomPreferences
                  style={{ fontSize: "50px", color: "black" }}
                />
              </div>

              <div className="icon_title">
                <h1>REFERENCES</h1>
              </div>
            </div>
            <div className="center_left_info">
              <h3>Ryan Weidenbach</h3>
            </div>
            <div className="center_left_info">
              Area Manager | General Manager Pluckers Inc.
            </div>
            <div className="center_left_title">
              <div className="icon">
                <FiPhone
                  style={{ marginTop: "5px", fontSize: "20px", color: "black" }}
                />
              </div>
              <div className="center_left_sub_info">210.328.5955</div>
            </div>
            <div className="center_left_info">
              <h3>Greg Austin</h3>
            </div>
            <div className="center_left_info">
              Part Owner | General Manager Alamo Restaurants Inc.
            </div>
            <div className="center_left_title">
              <div className="icon">
                <FiPhone
                  style={{ marginTop: "5px", fontSize: "20px", color: "black" }}
                />
              </div>
              <div className="center_left_sub_info">210.867.2310</div>
            </div>
          </div>
          <div className="center_right">
            <div className="employment_box">
              <div className="employment_icon">
                <PiGraduationCapFill
                  style={{
                    marginTop: "0px",
                    fontSize: "40px",
                    color: "black",
                  }}
                />
              </div>
              <div className="employment_title">
                <h2>EDUCATION</h2>
              </div>
            </div>
            <div className="education_box">
              <IoMdCheckmarkCircle
                style={{
                  marginTop: "10px",
                  fontSize: "35px",
                  color: "black",
                }}
              />
              <h4>
                Associate of Science (A.S.) in Computer Programming San Antonio
                College, San Antonio, TX Graduated: May 2004
              </h4>
            </div>
            <div className="education_box">
              <IoMdCheckmarkCircle
                style={{
                  marginTop: "10px",
                  fontSize: "35px",
                  color: "black",
                }}
              />
              <h4>
                Full Stack Coding Boot Camp University of Texas at San Antonio
                School of Data Science, Graduated: Jul 2024
              </h4>
            </div>
            <div className="education_box">
              <IoCheckmarkCircleOutline
                style={{
                  marginTop: "10px",
                  fontSize: "45px",
                  color: "black",
                }}
              />
              <h4>
                Cisco CCNA 200-301 - The Complete Guide to Getting Certified, by
                Neil Anderson, Udemy Certificate of Completion, Achieved: Oct
                2025 *
              </h4>
            </div>
            <div className="education_box">
              <IoCheckmarkCircleOutline
                style={{
                  marginTop: "10px",
                  fontSize: "40px",
                  color: "black",
                }}
              />
              <h4>
                Data Scientist Path: Analytics Specialist, Professional
                Certifcation Career Path, Codecademy.com, Achieved: Oct 2023
              </h4>
            </div>
            <div className="education_box">
              <FaAsterisk
                style={{
                  marginTop: "10px",
                  fontSize: "15px",
                  color: "black",
                }}
              />
              <h4>
                Currently self-educating and studying for both CCNA and AWS
                certifications via AlphaPrep.com
              </h4>
            </div>
            <div className="employment_box" style={{ marginTop: "20px" }}>
              <div className="employment_icon">
                <ImFloppyDisk
                  style={{
                    marginTop: "0px",
                    fontSize: "45px",
                    color: "black",
                  }}
                />
              </div>
              <div className="employment_title">
                <h2>SOFTWARE PROFICIENCY</h2>
              </div>
            </div>
            <div className="employment_desc">
              Python | JavaScript | Node.js | React | SQL | MySQL | PostgreSQL |
              MongoDB | HTML5 | REST APIs | CCNA Networking Fundamentals | Git |
              GitHub | Visual Studio Code | Postman | Docker | Cisco Packet
              Tracer | Heroku | Linux | Windows and Office Suite | Excel |
              Google Sheets | ADP
            </div>
            <div className="employment_box" style={{ marginTop: "20px" }}>
              <div className="employment_icon">
                <MdWorkHistory
                  style={{
                    marginTop: "0px",
                    fontSize: "45px",
                    color: "black",
                  }}
                />
              </div>
              <div className="employment_title">
                <h2>EMPLOYMENT HISTORY</h2>
              </div>
            </div>
            <div className="employment_sub">
              <div className="employment_sub_icon">
                <BsRecordCircle
                  style={{
                    marginTop: "0px",
                    fontSize: "25px",
                    color: "black",
                  }}
                />
              </div>
              <div className="employment_sub_company">
                <h2>
                  Alamo Restaurants, Inc. 01/1998 - 02/2023 <br />
                  <h6>Shift Manager | Assistant Mgr | Server | Bartender</h6>
                </h2>
              </div>
            </div>
            <div className="employment_desc">
              Customer Service | New Employee Training | Shift Management |
              Quality Control | Financial Accountability | Upselling |
              Preemptive Planning | Organizational Skills | Conflict Resolution
              | Team Player Environment | Positive Attitude
            </div>
            <div className="employment_sub">
              <div className="employment_sub_icon">
                <BsRecordCircle
                  style={{
                    marginTop: "0px",
                    fontSize: "25px",
                    color: "black",
                  }}
                />
              </div>
              <div className="employment_sub_company">
                <h2>
                  Alamo Restaurants, Inc. 07/2005 - 05/2008 <br />
                  <h6>Personnel Administrator | Payroll </h6>
                </h2>
              </div>
            </div>
            <div className="employment_desc">
              Employee New Hires and Terminations | Accurate Payroll of 200+
              Employees | 401K Management | Workers' Comp | Quarterly Taxes |
              Record Maintenace | Compliance Control | Budget Tracking |
              Occasional Accounts Payable | Timecard Auditing | Health Insurance
              Management
            </div>
            <div className="employment_sub">
              <div className="employment_sub_icon">
                <BsRecordCircle
                  style={{
                    marginTop: "0px",
                    fontSize: "25px",
                    color: "black",
                  }}
                />
              </div>
              <div className="employment_sub_company">
                <h2>
                  Hyatt Hotels and Resorts 02/2023 - 06/2023
                  <br />
                  <h6>Bartender</h6>
                </h2>
              </div>
            </div>
            <div className="employment_desc">
              Fast Paced High Volume | Customer Service | Pristine Work Area |
              Efficient Collaboration | Accurate Money Management | Develop
              Repeat Clientele
            </div>
            <div className="employment_sub">
              <div className="employment_sub_icon">
                <BsRecordCircle
                  style={{
                    marginTop: "0px",
                    fontSize: "25px",
                    color: "black",
                  }}
                />
              </div>
              <div className="employment_sub_company">
                <h2>
                  Reyes Remodeling and Repairs 08/2024 - 10/2025
                  <br />
                  <h6>Remodel and Repair Contractor</h6>
                </h2>
              </div>
            </div>
            <div className="employment_desc" style={{ paddingBottom: "20px" }}>
              Flooring | Tile | Drywall | Plumbing | Painting | Landscaping | TV
              and Appliance Installation
            </div>
            <div className="employment_box" style={{ marginTop: "20px" }}>
              <div className="employment_icon">
                <GrResume
                  style={{
                    marginTop: "0px",
                    fontSize: "45px",
                    color: "black",
                  }}
                />
              </div>
              <div className="employment_title">
                <h2>SUMMARY</h2>
              </div>
            </div>
            <div className="employment_desc">
              Experienced professional transitioning from the service industry
              into IT. Brings 20+ years of leadership, communication, and team
              coordination skills, along with a growing technical foundation in
              Full Stack dev and information technology. Eager to contribute to
              a dynamic tech environment and continue developing technical
              expertise.
            </div>
          </div>
        </div>
        <div className="hobbies_section">
          <h3>--- HOBBIES ---</h3>
        </div>
        <div>
          <div className="hobbies_icons_section">
            <TbBowling
              style={{
                marginTop: "0px",
                fontSize: "25px",
                color: "black",
              }}
            />
            <FaChess
              style={{
                marginTop: "0px",
                fontSize: "25px",
                color: "black",
              }}
            />
            <FaRaspberryPi
              style={{
                marginTop: "0px",
                fontSize: "25px",
                color: "black",
              }}
            />
            <GiPokerHand
              style={{
                marginTop: "0px",
                fontSize: "25px",
                color: "black",
              }}
            />
            <FaPython
              style={{
                marginTop: "0px",
                fontSize: "25px",
                color: "black",
              }}
            />
            <IoLogoJavascript
              style={{
                marginTop: "0px",
                fontSize: "25px",
                color: "black",
              }}
            />
            <GiDart
              style={{
                marginTop: "0px",
                fontSize: "25px",
                color: "black",
              }}
            />
            <FaFootballBall
              style={{
                marginTop: "0px",
                fontSize: "25px",
                color: "black",
              }}
            />
            <FaNetworkWired
              style={{
                marginTop: "0px",
                fontSize: "25px",
                color: "black",
              }}
            />
            <FaDog
              style={{
                marginTop: "0px",
                fontSize: "25px",
                color: "black",
              }}
            />
            <TbBrandTesla
              style={{
                marginTop: "0px",
                fontSize: "25px",
                color: "black",
              }}
            />
            <FaBible
              style={{
                marginTop: "0px",
                fontSize: "25px",
                color: "black",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
