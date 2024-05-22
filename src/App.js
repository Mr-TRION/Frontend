import React,{useState} from 'react';
import { useEffect } from 'react';
import Select from "react-select";
import './App.css';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function App() {

  const [results, setResults] = useState([]);
  const [search, setSearchText] = useState('');

  const [Name, setName] = useState('');
  const [Annual_Percentage, setAnnual_Percentage] = useState('');
  const [Community, setCommunity] = useState('');
  const [Disability, setDisability] = useState('');
  const [Education_Qualification, setEducation_Qualification] = useState(0);
  const [Exservice_men, setExservice_men] = useState('');
  const [Gender, setGender] = useState('');
  const [Income, setIncome] = useState('');
  const [Outcome, setOutcome] = useState('');
  const [Religion, setReligion] = useState('');
  const [Sports, setSports] = useState('');

  const [marks, setMarks] = useState('90-100');
  const [cat, setCat] = useState('General');
  const [Dis, setDis] = useState('No');
  const [Education, setEducation] = useState('Undergraduate');
  const [service, setService] = useState('No');
  const [sex, setSex] = useState('Male');
  const [inc, setInc] = useState('3L to 6L');
  const [rel, setRel] = useState('Hindu');
  const [sport, setSport] = useState('No');
  


  //setting
  const [found, setFound] = useState(0);

  const [lgShow, setLgShow] = useState(false);

  const [lgShow2, setLgShow2] = useState(false);

    // Input change
    const handleSearchChange = (e) => {
      setSearchText(e.target.value);
      // console.log(search);
    }

  const handleEnterSearch = async (e) => {
    if(e.key === 'Enter') {
      const res = await axios.get(`https://backend-d7ys.onrender.com/search/${search}`);

      console.log(res);

      setResults(res.data);
      
    } 
  }


  const handleEnterSearch2 = async () => {
      const res = await axios.get(`https://backend-d7ys.onrender.com/fltr`);

      console.log(res);
      // setsearchName(search);
      setResults(res.data);
      // setFound(res.data.length);
      // setSearchText('');
  }

  // async function handleEnterSearch(e){
  //   if(e.key === 'Enter') {
  //     const res = await axios.get(`http://localhost:3000/fltr`);

  //     console.log(res);
  //     // setsearchName(search);
  //     setResults(res.data);
  //     // setFound(res.data.length);
  //     // setSearchText('');
  //   } 
  // }

  const handleChange = (e) => {
    setCat( e.target.value );
  }

  const handleChange2 = (e) => {
    setDis( e.target.value );
  }

  const handleChange3 = (e) => {
    setSex( e.target.value );
  }

  const handleChange4 = (e) => {
    setRel( e.target.value );
  }

  const handleChange5 = (e) => {
    setSport( e.target.value );
  }

  const handleChange6 = (e) => {
    setService( e.target.value );
  }

  const handleChange7 = (e) => {
    setInc( e.target.value );
  }

  const handleChange8 = (e) => {
    setEducation( e.target.value );
  }

  const handleChange9 = (e) => {
    setMarks( e.target.value );
  }


  const modalClick = async (itemId) => {
    setLgShow(true); 
    const res = await axios.get(`https://backend-d7ys.onrender.com/findId/${itemId}`);
    // console.log(res);
    setName(res.data.Name);  
    setAnnual_Percentage(res.data.Annual_Percentage);
    setCommunity(res.data.Community);
    setDisability(res.data.Disability);
    setEducation_Qualification(res.data.Education_Qualification);
    setExservice_men(res.data.Exservice_men);
    setGender(res.data.Gender);
    setIncome(res.data.Income);
    setOutcome(res.data.Outcome);
    setReligion(res.data.Religion);
    setSports(res.data.Sports);
  }

  const modalClick2 = async (itemId) => {
    setLgShow2(true); 
    
  }


  const options = [
    {
      label: "General",
      value: "General",
    },
    {
      label: "OBC",
      value: "OBC",
    },
    {
      label: "SC/ST",
      value: "SC-ST",
    },
    {
      label: "Minority",
      value: "Minority",
    },
  ];


  const options2 = [
    {
      label: "Yes",
      value: "Yes",
    },
    {
      label: "No",
      value: "No",
    },
  ];

  const options3 = [
    {
      label: "Male",
      value: "Male",
    },
    {
      label: "Female",
      value: "Female",
    },
  ];


  const options4 = [
    {
      label: "Hindu",
      value: "Hindu",
    },
    {
      label: "Muslim",
      value: "Muslim",
    },
    {
      label: "Chirstian",
      value: "Chirstian",
    },
    {
      label: "Others",
      value: "Others",
    },
  ];

  const options5 = [
    {
      label: "Yes",
      value: "Yes",
    },
    {
      label: "No",
      value: "No",
    },
  ];

  const options6 = [
    {
      label: "Yes",
      value: "Yes",
    },
    {
      label: "No",
      value: "No",
    },
  ];


  const options7 = [
    {
      label: "Upto 1.5L",
      value: "Upto 1.5L",
    },
    {
      label: "1.5L to 3L",
      value: "1.5L to 3L",
    },
    {
      label: "3L to 6L",
      value: "3L to 6L",
    },
    {
      label: "Above 6L",
      value: "Above 6L",
    },
  ];
  

  const options8 = [
    {
      label: "Undergraduate",
      value: "Undergraduate",
    },
    {
      label: "Postgraduate",
      value: "Postgraduate",
    },
    {
      label: "Doctrate",
      value: "Doctrate",
    },
  ];

  const options9 = [
    {
      label: "90-100",
      value: "90-100",
    },
    {
      label: "80-90",
      value: "80-90",
    },
    {
      label: "70-80",
      value: "70-80",
    },
    {
      label: "60-70",
      value: "60-70",
    },
  ];




  // function SectionOption({ value }) {
  //   return (
  //     // Negative margin to undo reselect styles
  //     <div className="item">
  //       {value}
  //     </div>
  //   );
  // }

  const apply = async () => {
    const res = await axios.get(`https://backend-d7ys.onrender.com/filter/${Education}/${marks}/${cat}/${sport}/${Dis}/${inc}/${sex}/${service}`);

    console.log(res);
      // setsearchName(search);
    setResults(res.data);
    // console.log(cat);
    // console.log(Dis);
    // console.log(rel);
    // console.log(inc);
    // console.log(sport);
    // console.log(service);
    // console.log(sex);
    // console.log(Education);
    setLgShow2(false); 
    
  }



  useEffect(() => {
    setTimeout(handleEnterSearch2, 500);
  }, []);

  return (
    <div className="App">
    
        <div className="search">
          <input 
            type='text' 
            className='input' 
            placeholder='Search here...' 
            onChange={handleSearchChange}
            onKeyPress={handleEnterSearch}
            value={search} 
          />

          <button id="fltr-btn" onClick={() => modalClick2()} >Filter</button>
        </div>

        {/* Setting Modal  */}


        <Modal
          size="lg"
          show={lgShow2}
          onHide={() => setLgShow2(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              <h3>Filter</h3>
            </Modal.Title>
          </Modal.Header>
          
          <Modal.Body>
          <div id="opt">
            {/* <div> */}
              <label>Education</label>
              <select value={Education} onChange={handleChange8}>
                {options8.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select> 
            {/* </div> */}
          
            {/* <div> */}
              <label>Marks</label>
              <select value={marks} onChange={handleChange9}>
                {options9.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select> 
            {/* </div> */}

            {/* <div> */}
              <label>Category</label>   
                <select value={cat} onChange={handleChange}>
                {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select> 
            {/* </div> */}
          </div>
      

          <div id="opt">
          <label>Disability</label>
          <select value={Dis} onChange={handleChange2}>
            {options2.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select> 
          <label>Gender</label>
          <select value={sex} onChange={handleChange3}>
            {options3.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select> 

          <label>Religion</label>
          <select value={rel} onChange={handleChange4}>
            {options4.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select> 
          </div>

          <div id="opt">
          <label>Sports</label>
          <select value={sport} onChange={handleChange5}>
            {options5.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select> 


          <label>Exservice men</label>
          <select value={service} onChange={handleChange6}>
            {options6.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select> 

          <label>Income</label>
          <select value={inc} onChange={handleChange7}>
            {options7.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select> 
          </div>

          
          <button id="apply" onClick={() => apply()} >Apply</button>
          </Modal.Body>
        </Modal>

        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              <h3>Details</h3>
            </Modal.Title>
          </Modal.Header>
          
          <Modal.Body>
            <h5>{Name}</h5>
            <hr />
            <p>A scholarship is a coveted opportunity that provides financial assistance to deserving students, empowering them to pursue their educational aspirations. These awards are often merit-based, recognizing academic excellence, leadership qualities, and extracurricular involvement. Additionally, scholarships can also be need-based, catering to students facing financial constraints. Beyond financial support, scholarships offer recognition and validation of students' hard work and dedication. They open doors to higher education, enabling individuals to access opportunities they might not otherwise afford. By investing in students' futures, scholarships foster talent development and contribute to the growth of diverse, skilled professionals who will make meaningful contributions to society.</p>
            <p>Education Qualification - {Education_Qualification}</p>
            <p>Disability - {Disability}</p>
            <p>Gender - {Gender}</p>
            <p>Annual_Percentage - {Annual_Percentage}</p>
            <p>Community - {Community}</p>
            <p>Income - {Income}</p>
            <p>Sports - {Sports}</p>
            <p>Exservice_men - {Exservice_men}</p>
            <p>Outcome - {Outcome}</p>
            <p>Religion - {Religion}</p>
            <a id="link" targer="_blank" to="https://google.com">Apply Here</a>
          </Modal.Body>
        </Modal>


        {results.length > 0 ? 
        <div className="data">
          {
            results.map((item) => {
              return  (
                  <div id="data-list" onClick={() => modalClick(item._id)} key={item.id}>
                    {item.Name}
                    <hr />
                    {item.Community}
                  </div>
              )
            })
          }
        </div> :
        <div id="no"> 
          <h4>No Data found</h4>
        </div>
        }


         
    </div>
  );
}

export default App;
