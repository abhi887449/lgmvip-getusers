import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import Usercard from './Usercard'

const Usercards = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [items, setItems] = useState([]);
  const [currpage, setCurrpage] = useState({ item: 1, totalitems: null });
  useEffect(() => {
    let url = `https://reqres.in/api/users?page=1`;
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result.data);
          setCurrpage({ item: 1, totalitems: result.total_pages })
          setTimeout(() => {
            setIsLoaded(false)
          }, 1000);
        }
      )
  }, [])
  const previous = async () => {
    if (currpage.item > 1) {
      setIsLoaded(true)
      let url = `https://reqres.in/api/users?page=${currpage.item - 1}`;
      let data = await fetch(url);
      let parsedata = await data.json();
      setItems(parsedata.data)
      setCurrpage({ item: currpage.item - 1, totalitems: parsedata.total_pages })
      setTimeout(() => {
        setIsLoaded(false)
      }, 1000);
    }
  }
  const nextpage = async () => {
    if (currpage.item < currpage.totalitems) {
      setIsLoaded(true)
      let url = `https://reqres.in/api/users?page=${currpage.item + 1}`;
      let data = await fetch(url);
      let parsedata = await data.json();
      setItems(parsedata.data)
      setCurrpage({ item: currpage.item + 1, totalitems: parsedata.total_pages })
      setTimeout(() => {
        setIsLoaded(false)
      }, 1000);
    }
  }
  if (isLoaded) {
    return (
      <Loading />
    )
  }
  else {

    return (
      <>
        <div className="flex m-10">
          <div className="btn" onClick={previous}>Previous</div>
          <div className="btn ml-auto" onClick={nextpage}>Next</div>
        </div>
        <div className='flex justify-center content-center flex-col1'>
          {
            items.map((item) => {
              return (
                <Usercard key={item.id} id={item.id} email={item.email} name={item.first_name + " " + item.last_name} avatarUrl={item.avatar} />
              )
            })
          }
        </div>
      </>
    )
  }
}

export default Usercards
