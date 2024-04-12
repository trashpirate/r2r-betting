"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";

const ADMIN_ADDRESS = "0xb6e6e590275060EF691229529031B481FdD31837";

interface RoundFormState {
  num: string;
  title: string;
  date: string;
  teamrugs: string;
  teamriches: string;
  winsrugs: string;
  bnbrugs: string;
  winsriches: string;
  bnbriches: string;
  completed: string;
}

export default function Admin() {
  const [formData, setFormData] = useState<RoundFormState>({
    num: '0',
    title: '',
    date: '',
    teamrugs: '',
    teamriches: '',
    winsrugs: '0',
    bnbrugs: '0',
    winsriches: '0',
    bnbriches: '0',
    completed: 'false',
  })

  const [roundUpdated, setRoundUdpated] = useState<Boolean>(false);

  useEffect(() => {
    // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
    const timeoutId = setTimeout(() => {
      setRoundUdpated(false);
    }, 5000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [roundUpdated]); // Empty dependency array ensures the effect runs only once

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    await fetch('api/add-round', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    await fetch("/api/get-latest-round", { cache: 'no-store' }).then(response => response.json()).then(data => {
      const latestRound: RoundFormState = {
        num: data.rows.number,
        title: data.rows.title,
        date: data.rows.date,
        teamrugs: data.rows.teamrugs,
        teamriches: data.rows.teamriches,
        winsrugs: data.rows.winsrugs,
        bnbrugs: data.rows.bnbrugs,
        winsriches: data.rows.winsriches,
        bnbriches: data.rows.bnbriches,
        completed: data.rows.completed,
      }
      setFormData(latestRound);
      setRoundUdpated(true);
    })

  }

  useEffect(() => {
    fetch("/api/get-latest-round", { cache: 'no-store' }).then(response => response.json()).then(data => {
      const latestRound: RoundFormState = {
        num: data.rows.number,
        title: data.rows.title,
        date: data.rows.date,
        teamrugs: data.rows.teamrugs,
        teamriches: data.rows.teamriches,
        winsrugs: data.rows.winsrugs,
        bnbrugs: data.rows.bnbrugs,
        winsriches: data.rows.winsriches,
        bnbriches: data.rows.bnbriches,
        completed: data.rows.completed,
      }
      setFormData(latestRound)
    })
  }, [])

  const labelStyle = "w-full flex flex-row justify-between";
  const inputStyle = "bg-white/20 w-fit text-white py-1 px-3 rounded-sm ";
  const fieldStyle = "mb-4 flex flex-row gap-4  w-80 justify-between bg-white/10 p-4 rounded-md";
  return (
    <main className="p-16 min-h-screen bg-background text-white">
      <form className="flex flex-col p-2" method="POST">
        <div className="flex flex-col p-2">
          <div className={fieldStyle}>
            <label className={labelStyle} id="number">Round:
              <input className={inputStyle} type="number" id="number" name="num" onChange={handleChange} value={formData.num} /></label>
          </div>
          <div className={fieldStyle}>
            <label className={labelStyle} id="title">Title:
              <input className={inputStyle} type="text" id="title" name="title" onChange={handleChange} value={formData.title} /></label>
          </div>
          <div className={fieldStyle}>
            <label className={labelStyle} id="date">Date:
              <input className={inputStyle} type="text" id="date" name="date" onChange={handleChange} value={formData.date} /></label>
          </div>
          <div className={fieldStyle}>
            <label className={labelStyle} id="teamrugs">Team Rugs:
              <input className={inputStyle} type="text" id="teamrugs" name="teamrugs" onChange={handleChange} value={formData.teamrugs} /></label>
          </div>
          <div className={fieldStyle}>
            <label className={labelStyle} id="teamriches">Team Riches:
              <input className={inputStyle} type="text" id="teamriches" name="teamriches" onChange={handleChange} value={formData.teamriches} /></label>
          </div>
          <div className={fieldStyle}>
            <label className={labelStyle} id="winsrugs">Wins Rugs:
              <input className={inputStyle} type="text" id="winsrugs" name="winsrugs" onChange={handleChange} value={formData.winsrugs} /></label>
          </div>
          <div className={fieldStyle}>
            <label className={labelStyle} id="bnbrugs">BNB Rugs:
              <input className={inputStyle} type="text" id="bnbrugs" name="bnbrugs" onChange={handleChange} value={formData.bnbrugs} /></label>
          </div>
          <div className={fieldStyle}>
            <label className={labelStyle} id="winsriches">Wins Riches:
              <input className={inputStyle} type="text" id="winsriches" name="winsriches" onChange={handleChange} value={formData.winsriches} /></label>
          </div>
          <div className={fieldStyle}>
            <label className={labelStyle} id="bnbriches">BNB Riches:
              <input className={inputStyle} type="text" id="bnbriches" name="bnbriches" onChange={handleChange} value={formData.bnbriches} /></label>
          </div>
          <div className={fieldStyle}>
            <label className={labelStyle} id="completed">Round Completed:
              <input className={inputStyle} type="text" id="completed" name="completed" onChange={handleChange} value={formData.completed} /></label>
          </div>
          <div className={fieldStyle}>
            <div className="text-orange-500 text-center h-12 mx-auto">{roundUpdated ? `Round #${formData.num} added/updated.` : `By clicking submit you will add/update betting round #${formData.num}`}</div>
          </div>
          <div className="mb-4 flex flex-row gap-4  w-80 justify-center bg-white/10 p-4 rounded-md">
            <button className="text-left bg-green-800 hover:bg-green-600 w-fit p-2 rounded-md" type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
          </div>
        </div>
      </form>

    </main>
  );
}
