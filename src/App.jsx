import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  let jobs = [
    {
      id: 1,
      company: "ChatGen",
      startDate: " Start date: Mar 2020",
      endDate: " End date: Apr 2021",
      title: "Frontend Developer",
      image: <img src="https://www.logodesign.net/images/home-page-logo-03.png" alt="" />
    },
    {
      id: 2,
      company: "Mattermost",
      startDate: "Start date: Aug 2020",
      endDate: "End date: Dec 2020",
      title: "Software Developer",
      image: <img src="https://www.designhill.com/resize_img.php?atyp=page_file&pth=ft_ca_sl2||117||bannerslider_1&flp=1554116520-9584982635ca1efa8d7ec99-02955484.jpg" alt="" />
    },
    {
      id: 3,
      company: "Wipro",
      startDate: "Start date: jun 2021",
      endDate: "End date: may 2022",
      title: "Backend Developer",
      image: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/330px-Wipro_Primary_Logo_Color_RGB.svg.png" alt="" />
    }
  ];

  return (
    <div className="App">
    <Header />
      <Home
        id={jobs[0].id}
        company={jobs[0].company}
        startDate={jobs[0].startDate}
        endDate={jobs[0].endDate}
        title={jobs[0].title}
        image={jobs[0].image}
      />
      <Home
        id={jobs[1].id}
        company={jobs[1].company}
        startDate={jobs[1].startDate}
        endDate={jobs[1].endDate}
        title={jobs[1].title}
        image={jobs[1].image}
      />
      <Home
        id={jobs[2].id}
        company={jobs[2].company}
        startDate={jobs[2].startDate}
        endDate={jobs[2].endDate}
        title={jobs[2].title}
        image={jobs[2].image}
      />
    </div>
  );
}

export default App;
  