import React, { Component } from 'react';
import Navbar1 from './components/Navbar1';
import CategoryList from './components/CategoryList';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MovieDetails from "./components/MovieDetails";
import Copyright from "./components/Copyright";
import SearchResult from "./components/SearchResult";

class App extends Component {
  types= ["Comedy","Action","Romance","Horror"]
  state={
    Comedy:[
      {
        name:"Deadpool 1",
        taswira:"https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
        cover:"https://stmed.net/sites/default/files/deadpool-hd-wallpapers-32964-8058751.jpg",
        streaming:"http://mc1.dl3enter.in/files/d2/Movie/2016/Deadpool/Deadpool.2016.720p.BluRay.mkv",
        details1:" 1h 48min | Action, Adventure, Comedy | 10 February 2016",
        details2:"A fast-talking mercenary with a morbid sense of humor is subjected to a rogue experiment that leaves him with accelerated healing powers and a quest for revenge.",
        details3:"Stars : Ryan Reynolds, Morena Baccarin, T.J. Miller" 
      },
      {
        name:"The Hangover 1",
        taswira:"https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX675_CR0,0,675,999_AL_.jpg",
        cover:"https://www.aceshowbiz.com/images/still/the_hangover01.jpg",
        streaming:"http://mc1.dl3enter.in/files/d1/film/2009/The%20Hangover/The.Hangover.2009.UNRATED.720p.BluRay.DL.mkv",
        details1:"1h 40min | Comedy | 24 June 2009",
        details2:"Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.",
        details3:"Stars : Zach Galifianakis, Bradley Cooper, Justin Bartha"
      },
      {
        name:"Dirty Grandpa",
        taswira:"https://m.media-amazon.com/images/M/MV5BMzk0NzkyNDk2M15BMl5BanBnXkFtZTgwNDczOTU3NzE@._V1_SY1000_CR0,0,657,1000_AL_.jpg",
        cover:"https://mrmoviefilmblog.files.wordpress.com/2016/01/dirty-grandpa-01.jpg",
        streaming:"http://mc1.dl3enter.in/files/d2/Movie/2016/Dirty%20Grandpa/Dirty.Grandpa.2016.720p.BluRay.mkv",
        details1:"1h 42min | Comedy | 3 February 2016",
        details2:"Right before his wedding, an uptight guy is tricked into driving his grandfather, a lecherous former Army Lieutenant Colonel, to Florida for Spring Break.",
        details3:"Stars: Robert De Niro, Zac Efron, Zoey Deutch"
      },
      {
        name:"Neighbors 2: Sorority Rising",
        taswira:"https://m.media-amazon.com/images/M/MV5BMTY0NzUxMDUzN15BMl5BanBnXkFtZTgwNzI2MTY4ODE@._V1_SY1000_CR0,0,631,1000_AL_.jpg",
        cover:"http://lititzrecord.com/wp-content/uploads/2016/06/LR20160609_ReelReviews.jpg",
        streaming:"http://mc1.dl3enter.in/files/d2/Movie/2016/Neighbors%202%20Sorority%20Rising/Neighbors.2.Sorority.Rising.2016.720p.HDrip.mkv",   
        details1:" 1h 32min | Comedy | 6 July 2016",
        details2:"When their new next-door neighbors turn out to be a sorority even more debaucherous than the fraternity previously living there, Mac and Kelly team with their former enemy, Teddy, to bring the girls down.",
        details3:"Stars : Seth Rogen, Rose Byrne, Zac Efron"
      },
      {
        name:"Jump Street 22",
        taswira:"https://m.media-amazon.com/images/M/MV5BMTcwNzAxMDU1M15BMl5BanBnXkFtZTgwNDE2NTU1MTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        cover:"https://m.media-amazon.com/images/M/MV5BMTY3NTUzMzE2MV5BMl5BanBnXkFtZTgwNzQ4NTI0MTE@._V1_SY1000_CR0,0,1499,1000_AL_.jpg",
        streaming:"http://mc1.dl3enter.in/files/d1/film/2014/22%20Jump%20Street/22.Jump.Street.2014.720p.BluRay.DL.mkv",
        details1:"1h 52min | Action, Comedy, Crime | 27 August 2014",
        details2:"After making their way through high school (twice), big changes are in store for officers Schmidt and Jenko when they go deep undercover at a local college.",
        details3:"Stars : Channing Tatum, Jonah Hill, Ice Cube"
      },
      {
        name:"Let's Be Cops",
        taswira:"https://m.media-amazon.com/images/M/MV5BMjI3MDY2ODQwNF5BMl5BanBnXkFtZTgwNjUzNjE4MTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        cover:"https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/535977dee4b083ea19ed95d9/1398372333492/?format=2500w",
        streaming:"http://mc1.dl3enter.in/files/d1/film/2014/Lets%20Be%20Cops/Lets.Be.Cops.2014.720p.BluRay.DL.mkv",
        details1:" 1h 44min | Comedy, Crime | 21 January 2015",
        details2:"Two struggling pals dress as police officers for a costume party and become neighborhood sensations. But when these newly-minted 'heroes' get tangled in a real life web of mobsters and dirty detectives, they must put their fake badges on the line.",
        details3:"Stars : Jake Johnson, Damon Wayans Jr., Rob Riggle"
      },
    ],
    Action:[
      {
        name:"Thor : The Dark World",
        taswira:"https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SY1000_SX700_AL_.jpg",
        cover:"http://assets2.ignimgs.com/2013/08/15/thor-2-the-dark-world-1280jpg-8827b7_1280w.jpg",
        streaming:"http://5.9.40.180/EN/MoviesSuperHeroes/Thor.2011.720p.BrRip.mp4",
        details1:"1h 52min | Action, Adventure, Fantasy | 30 October 2013",
        details2:"When Dr. Jane Foster gets cursed with a powerful entity known as the Aether, Thor is heralded of the cosmic event known as the Convergence and the genocidal Dark Elves.",
        details3:"Stars : Chris Hemsworth, Natalie Portman, Tom Hiddleston"
      },
      {
        name:"Wonder Woman",
        taswira:"https://m.media-amazon.com/images/M/MV5BNDFmZjgyMTEtYTk5MC00NmY0LWJhZjktOWY2MzI5YjkzODNlXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SY1000_SX675_AL_.jpg",
        cover:"https://www.shanethegamer.com/wp-content/uploads/2017/06/wonder_woman-2017-movie-gal_gadot-14417.jpg",
        streaming:"http://5.9.40.180/EN/MoviesSuperHeroes/Wonder.Woman.2017.mp4",
        details1:"2h 21min | Action, Adventure, Fantasy | 7 June 2017",
        details2:"When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.",
        details3:"Stars : Gal Gadot, Chris Pine, Robin Wright"
      },
      {
        name:"The Hunger Games: Mockingjay",
        taswira:"https://m.media-amazon.com/images/M/MV5BNjQzNDI2NTU1Ml5BMl5BanBnXkFtZTgwNTAyMDQ5NjE@._V1_SY1000_CR0,0,657,1000_AL_.jpg",
        cover:"https://i.pinimg.com/originals/a7/6d/e4/a76de4c55cfc3ad9bcc3c46be4afd822.jpg",
        streaming:"http://mc1.dl3enter.in/files/d2/Movie/2015/The%20Hunger%20Games%20Mockingjay%20Part%202/The.Hunger.Games.Mockingjay.Part.2.2015.1080p.3D.BluRay.mkv",
        details1:"2h 17min | Action, Adventure, Sci-Fi | 18 November 2015",
        details2:"Katniss and a team of rebels from District 13 prepare for the final battle that will decide the future of Panem.",
        details3:"Stars : Jennifer Lawrence, Josh Hutcherson, Liam Hemsworth"
      },
      {
        name:"24 Hours To Live",
        taswira:"https://m.media-amazon.com/images/M/MV5BMjAyNjY0MjU1NF5BMl5BanBnXkFtZTgwMjAwNDMwNDI@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        cover:"http://cinecinephile.com/wp-content/uploads/2018/01/24H-Limit-Ethan-Hawke.jpg",
        streaming:"http://5.9.40.180/EN/24_Hours_to_Live_2017_en.mp4",
        details1:"1h 33min | Action, Sci-Fi, Thriller | 17 January 2018",
        details2:"An assassin seeks redemption after being given a second chance at life.",
        details3:"Stars : Ethan Hawke, Qing Xu, Paul Anderson "
      },
      {
        name:"Captain America: Civil War",
        taswira:"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        cover:"http://s1.1zoom.me/b5253/573/Captain_America_Civil_War_Captain_America_hero_531914_1920x1200.jpg",
        streaming:"http://5.9.40.180/EN/MoviesSuperHeroes/Captain.America.Civil.War.2016.mp4",
        details1:"2h 27min | Action, Adventure, Sci-Fi | 27 April 2016",
        details2:"Political involvement in the Avengers' activities causes a rift between Captain America and Iron Man.",
        details3:"Stars : Chris Evans, Robert Downey Jr., Scarlett Johansson "
      },
      {
        name:"Iron Man 2",
        taswira:"https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_.jpg",
        cover:"http://wallpapershdnow.com/images/movies/superhero/iron-man-2/iron-man-2-wallpaper-2.jpg",
        streaming:"http://mc1.dl3enter.in/files/d1/film/2010/Iron%20Man%202/IDLoDL.MaDL.2.2010.720p.BluDLay.%5bDLDLDLDLDLDLDLDL%5d.mkDL",
        details1:"2h 4min | Action, Adventure, Sci-Fi | 28 April 2010",
        details2:"With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.",
        details3:"Stars : Robert Downey Jr., Mickey Rourke, Gwyneth Paltrow "
      },
    ],
    Romance:[
      {
        name:"The Notebook",
        taswira:"https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_.jpg",
        cover:"http://images1.fanpop.com/images/photos/2500000/the-notebook-the-notebook-2574938-1920-1080.jpg",
        streaming:"http://mc1.dl3enter.in/files/d1/film/2004/The%20NoteBook%202004/The.Notebook.2004.720p.mkv",
        details1:"2h 3min | Drama, Romance | 8 September 2004",
        details2:"A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.",
        details3:"Stars : Gena Rowlands, James Garner, Rachel McAdams"
      },
      {
        name:"Titanic",
        taswira:"https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,671,1000_AL_.jpg",
        cover:"https://www.telegraph.co.uk/content/dam/films/2016/12/12/titanic-main-xlarge_trans_NvBQzQNjv4Bqzcd--Xj9PJMVYU0p8x70SFqz9KkK9VrRB9X1d8OfXf0.jpg",
        streaming:"https://mc1.dl3enter.in/files/d4/serial1/Movie/1997/Titanic/Titanic.1997.720p.BluRay.DL.mkv",
        details1:"3h 14min | Drama, Romance | 7 January 1998",
        details2:"A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
        details3:"Stars : Leonardo DiCaprio, Kate Winslet, Billy Zane"
      },
      {
        name:"The Best Of Me",
        taswira:"https://m.media-amazon.com/images/M/MV5BMzQ5Njg3Njk5N15BMl5BanBnXkFtZTgwODIwODIxMjE@._V1_SY1000_CR0,0,639,1000_AL_.jpg",
        cover:"http://cdn.collider.com/wp-content/uploads/the-best-of-me-james-marsden-michelle-monaghan.jpg",
        streaming:"https://ia802703.us.archive.org/16/items/The.Best.Of.Me.2014.BRRip.XViDJuggsETRG/The.Best.Of.Me.2014.BRRip.XViD-juggs%5BETRG%5D.mp4",
        details1:"1h 58min | Drama, Romance | 17 October 2014",
        details2:"A pair of former high school sweethearts reunite after many years when they return to visit their small hometown.",
        details3:"Stars : James Marsden, Michelle Monaghan, Luke Bracey"
      },
      {
        name:"Dear John",
        taswira:"https://m.media-amazon.com/images/M/MV5BMTk1NDEzMTU5NV5BMl5BanBnXkFtZTcwNTI3MTk5Mg@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        cover:"http://images2.fanpop.com/image/photos/13700000/Dear-John-dear-john-movie-13758171-2560-1707.jpg",
        streaming:"http://mc1.dl3enter.in/files/d1/film/2010/Dear%20John/DDLaDL%20JohDL%202010%20720p%20%5bDLDLDLDLDLDLDLDL%5d.mp4",
        details1:" 1h 48min | Drama, Romance, War | 31 March 2010",
        details2:"A romantic drama about a soldier who falls for a conservative college student while he's home on leave.",
        details3:"Stars : Channing Tatum, Amanda Seyfried, Richard Jenkins"
      },
      {
        name:"Three Steps Above Heaven",
        taswira:"https://m.media-amazon.com/images/M/MV5BNjQwM2Y3ODQtYjExMi00OGIwLWFhZWYtNDY0ZDM4ZTk1MzU1XkEyXkFqcGdeQXVyNjE5NTc2OTQ@._V1_.jpg",
        cover:"http://cineastas.mx/wp-content/uploads/2016/11/Frases-tres-metros-sobre-el-cielo-3.jpg",
        streaming:"http://mc1.dl3enter.in/files/d1/film/2010/Three%20Steps%20Above%20Heaven/Three.Steps.Above.Heaven.2010.720p.BluRay.DL.mkv",
        details1:"1h 58min | Action, Drama, Romance | 3 December 2010",
        details2:"A privileged woman and a reckless man fall in love despite their different social classes.",
        details3:"Stars : Mario Casas, María Valverde, Álvaro Cervantes"
      },
      {
        name:"The Lucky One",
        taswira:"https://m.media-amazon.com/images/M/MV5BMTg5NDk3MjAzMF5BMl5BanBnXkFtZTcwMjUyNzExNw@@._V1_SX647_CR0,0,647,999_AL_.jpg",
        cover:"https://m.media-amazon.com/images/M/MV5BMjE4OTUwMDUyMV5BMl5BanBnXkFtZTcwNDQxNDE2Nw@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        streaming:"http://mc1.dl3enter.in/files/d1/film/2012/The%20Lucky%20One/The.Lucky.One.2012.720p.BluRay.DL.mkv",
        details1:"1h 41min | Drama, Romance | 20 April 2012",
        details2:"A Marine travels to Louisiana after serving three tours in Iraq and searches for the unknown woman he believes was his good luck charm during the war.",
        details3:"Stars : Zac Efron, Taylor Schilling, Blythe Danner"
      }
    ],
    Horror:[
      {
        name:"The Conjuring 1",
        taswira:"https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        cover:"https://timedotcom.files.wordpress.com/2015/10/the-conjuring1.jpg",
        streaming:"http://mc1.dl3enter.in/files/d3/serial1/Collection/Insidious/The.Conjuring.2013.BluRay.720p.DL.mkv",
        details1:"1h 52min | Horror, Mystery, Thriller | 21 August 2013",
        details2:"Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
        details3:"Stars : Patrick Wilson, Vera Farmiga, Ron Livingston"
      },
      {
        name:"Insidious 3",
        taswira:"https://m.media-amazon.com/images/M/MV5BMTUwNDU4NjE1N15BMl5BanBnXkFtZTgwOTc0MzA5NDE@._V1_SY1000_SX675_AL_.jpg",
        cover:"https://fanart.tv/fanart/movies/280092/moviebackground/insidious-chapter-3-57fdffed6184d.jpg",
        streaming:"http://mc1.dl3enter.in/files/d2/Movie/2015/Insidious%20Chapter%203/Insidious.Chapter.3.2015.720p.BluRay.DL.mkv",
        details1:"1h 37min | Horror, Mystery, Thriller | 8 July 2015",
        details2:"A prequel set before the haunting of the Lambert family that reveals how gifted psychic Elise Rainier reluctantly agrees to use her ability to contact the dead in order to help a teenage girl who has been targeted by a dangerous supernatural entity.",
        details3:"Stars : Dermot Mulroney, Stefanie Scott, Angus Sampson "
      },
      {
        name:"The Witch",
        taswira:"https://m.media-amazon.com/images/M/MV5BMTY4MTU2NjMyNV5BMl5BanBnXkFtZTgwMzUwMDk4NzE@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        cover:"https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/56951db54bf11844ad32091a/1452613059465/?format=2500w",
        streaming:"http://mc1.dl3enter.in/files/d2/Movie/2015/The%20Witch/The.Witch.2015.720p.BluRay.mkv",
        details1:"1h 32min | Horror, Mystery | 15 June 2016",
        details2:"A family in 1630s New England is torn apart by the forces of witchcraft, black magic and possession.",
        details3:"Stars : Anya Taylor-Joy, Ralph Ineson, Kate Dickie"
      },
      {
        name:"Annabelle",
        taswira:"https://m.media-amazon.com/images/M/MV5BOTQwZmQyYzEtODk5ZC00OTY3LWExMjAtYzRjNWFhNGM3MzBlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        cover:"https://www.aceshowbiz.com/images/still/annabelle07.jpg",
        streaming:"http://mc1.dl3enter.in/files/d1/film/2014/Annabelle/Annabelle.2014.720p.DL.mkv",
        details1:"1h 49min | Horror, Mystery, Thriller | 9 August 2017",
        details2:"12 years after the tragic death of their little girl, a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, where they soon become the target of the dollmaker's possessed creation, Annabelle.",
        details3:"Stars : Anthony LaPaglia, Samara Lee, Miranda Otto"
      },
      {
        name:"The Invitation",
        taswira:"https://m.media-amazon.com/images/M/MV5BMTkzODMwNDkzOF5BMl5BanBnXkFtZTgwNDA4NzA1ODE@._V1_SY1000_CR0,0,687,1000_AL_.jpg",
        cover:"https://occ-0-987-990.1.nflxso.net/art/598bd/0ddc6250f4fda93025403fe6b12d830d8bd598bd.jpg",
        streaming:"http://mc1.dl3enter.in/files/d2/Movie/2015/The%20Invitation/The.Invitation.2015.750p.BluRay.mkv",
        details1:"1h 40min | Drama, Horror, Mystery | 8 April 2016",
        details2:"A man accepts an invitation to a dinner party hosted by his ex-wife, an unsettling affair that reopens old wounds and creates new tensions.",
        details3:"Stars : Logan Marshall-Green, Emayatzy Corinealdi, Michiel Huisman"
      },
      {
        name:"Creep",
        taswira:"https://m.media-amazon.com/images/M/MV5BMTY0NTU2ODM5Ml5BMl5BanBnXkFtZTgwMTAwOTA5NTE@._V1_.jpg",
        cover:"http://www.themoviebuff.net/wp-content/uploads/2018/10/creep-1.png",
        streaming:"http://mc1.dl3enter.in/files/d4/serial1/Movie/2014/Creep/Creep.2014.720p.WEB-DL.DL.mkv",
        details1:"1h 17min | Horror, Thriller | 23 June 2015",
        details2:"A young videographer answers an online ad for a one-day job in a remote town to record the last messages of a dying man. When he notices the man's odd behavior, he starts to question his intentions.",
        details3:"Stars : Patrick Brice, Mark Duplass"
      },
    ],
    isShowingDetails:false,
    selectedMovie:null,
  };
  transformerListe(list) {
    return list;
  }
  render() {
    return (
      <div style={{overflowX:"hidden"}}>
       <Navbar1 />
       <div class="container" >
         {
           this.types.map((name,index)=>(
            <CategoryList key={index}
              onSelectedMovie={(movie)=>{
                this.setState({isShowingDetails:true,selectedMovie:movie});
              }}
               name={name} list={this.transformerListe(this.state[name]) }  />
           ))
         }
        </div>
        {this.state.isShowingDetails && <MovieDetails movie={this.state.selectedMovie}/> }
        {/*{this.state.isSearching && <SearchResult />}*/}
        <Copyright/>
      </div>
    );
  }
}

export default App;
