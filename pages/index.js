import Head from 'next/head'
import { useState } from 'react'
import Countdown from 'react-countdown'
import PlayerBox from '../components/PlayerBox';

const players_data = [
  {
      "NBA_ID": 1630173,
      "FULL_NAME": "Precious Achiuwa",
      "FNAME": "Precious",
      "LNAME": "Achiuwa",
      "JERSEY_NUM": "5",
      "POS": "F",
      "TEAM": "TOR"
  },
  {
      "NBA_ID": 203500,
      "FULL_NAME": "Steven Adams",
      "FNAME": "Steven",
      "LNAME": "Adams",
      "JERSEY_NUM": "4",
      "POS": "C",
      "TEAM": "MEM"
  },
  {
      "NBA_ID": 1628389,
      "FULL_NAME": "Bam Adebayo",
      "FNAME": "Bam",
      "LNAME": "Adebayo",
      "JERSEY_NUM": "13",
      "POS": "C-F",
      "TEAM": "MIA"
  },
  {
      "NBA_ID": 1630583,
      "FULL_NAME": "Santi Aldama",
      "FNAME": "Santi",
      "LNAME": "Aldama",
      "JERSEY_NUM": "7",
      "POS": "F-C",
      "TEAM": "MEM"
  },
  {
      "NBA_ID": 200746,
      "FULL_NAME": "LaMarcus Aldridge",
      "FNAME": "LaMarcus",
      "LNAME": "Aldridge",
      "JERSEY_NUM": "21",
      "POS": "C-F",
      "TEAM": "BKN"
  },
  {
      "NBA_ID": 1629638,
      "FULL_NAME": "Nickeil Alexander-Walker",
      "FNAME": "Nickeil",
      "LNAME": "Alexander-Walker",
      "JERSEY_NUM": "6",
      "POS": "G",
      "TEAM": "UTA"
  },
  {
      "NBA_ID": 1628960,
      "FULL_NAME": "Grayson Allen",
      "FNAME": "Grayson",
      "LNAME": "Allen",
      "JERSEY_NUM": "7",
      "POS": "G",
      "TEAM": "MIL"
  },
  {
      "NBA_ID": 1628386,
      "FULL_NAME": "Jarrett Allen",
      "FNAME": "Jarrett",
      "LNAME": "Allen",
      "JERSEY_NUM": "31",
      "POS": "C",
      "TEAM": "CLE"
  },
  {
      "NBA_ID": 1630631,
      "FULL_NAME": "Jose Alvarado",
      "FNAME": "Jose",
      "LNAME": "Alvarado",
      "JERSEY_NUM": "15",
      "POS": "G",
      "TEAM": "NOP"
  },
  {
      "NBA_ID": 1626147,
      "FULL_NAME": "Justin Anderson",
      "FNAME": "Justin",
      "LNAME": "Anderson",
      "JERSEY_NUM": null,
      "POS": "F-G",
      "TEAM": null
  },
  {
      "NBA_ID": 203937,
      "FULL_NAME": "Kyle Anderson",
      "FNAME": "Kyle",
      "LNAME": "Anderson",
      "JERSEY_NUM": "1",
      "POS": "F-G",
      "TEAM": "MEM"
  },
  {
      "NBA_ID": 203507,
      "FULL_NAME": "Giannis Antetokounmpo",
      "FNAME": "Giannis",
      "LNAME": "Antetokounmpo",
      "JERSEY_NUM": "34",
      "POS": "F",
      "TEAM": "MIL"
  },
  {
      "NBA_ID": 203648,
      "FULL_NAME": "Thanasis Antetokounmpo",
      "FNAME": "Thanasis",
      "LNAME": "Antetokounmpo",
      "JERSEY_NUM": "43",
      "POS": "F",
      "TEAM": "MIL"
  },
  {
      "NBA_ID": 2546,
      "FULL_NAME": "Carmelo Anthony",
      "FNAME": "Carmelo",
      "LNAME": "Anthony",
      "JERSEY_NUM": "7",
      "POS": "F",
      "TEAM": "LAL"
  },
  {
      "NBA_ID": 1630175,
      "FULL_NAME": "Cole Anthony",
      "FNAME": "Cole",
      "LNAME": "Anthony",
      "JERSEY_NUM": "50",
      "POS": "G",
      "TEAM": "ORL"
  },
  {
      "NBA_ID": 1628384,
      "FULL_NAME": "OG Anunoby",
      "FNAME": "OG",
      "LNAME": "Anunoby",
      "JERSEY_NUM": "3",
      "POS": "F",
      "TEAM": "TOR"
  },
  {
      "NBA_ID": 1627853,
      "FULL_NAME": "Ryan Arcidiacono",
      "FNAME": "Ryan",
      "LNAME": "Arcidiacono",
      "JERSEY_NUM": "51",
      "POS": "G",
      "TEAM": "NYK"
  },
  {
      "NBA_ID": 2772,
      "FULL_NAME": "Trevor Ariza",
      "FNAME": "Trevor",
      "LNAME": "Ariza",
      "JERSEY_NUM": "1",
      "POS": "F",
      "TEAM": "LAL"
  },
  {
      "NBA_ID": 201571,
      "FULL_NAME": "D.J. Augustin",
      "FNAME": "D.J.",
      "LNAME": "Augustin",
      "JERSEY_NUM": "4",
      "POS": "G",
      "TEAM": "LAL"
  },
  {
      "NBA_ID": 1630166,
      "FULL_NAME": "Deni Avdija",
      "FNAME": "Deni",
      "LNAME": "Avdija",
      "JERSEY_NUM": "9",
      "POS": "F",
      "TEAM": "WAS"
  },
  {
      "NBA_ID": 1630555,
      "FULL_NAME": "Joel Ayayi",
      "FNAME": "Joel",
      "LNAME": "Ayayi",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1629028,
      "FULL_NAME": "Deandre Ayton",
      "FNAME": "Deandre",
      "LNAME": "Ayton",
      "JERSEY_NUM": "22",
      "POS": "C",
      "TEAM": "PHX"
  },
  {
      "NBA_ID": 1628962,
      "FULL_NAME": "Udoka Azubuike",
      "FNAME": "Udoka",
      "LNAME": "Azubuike",
      "JERSEY_NUM": "20",
      "POS": "C-F",
      "TEAM": "UTA"
  },
  {
      "NBA_ID": 1628963,
      "FULL_NAME": "Marvin Bagley III",
      "FNAME": "Marvin",
      "LNAME": "Bagley III",
      "JERSEY_NUM": "35",
      "POS": "F",
      "TEAM": "DET"
  },
  {
      "NBA_ID": 1630163,
      "FULL_NAME": "LaMelo Ball",
      "FNAME": "LaMelo",
      "LNAME": "Ball",
      "JERSEY_NUM": "2",
      "POS": "G",
      "TEAM": "CHA"
  },
  {
      "NBA_ID": 1628366,
      "FULL_NAME": "Lonzo Ball",
      "FNAME": "Lonzo",
      "LNAME": "Ball",
      "JERSEY_NUM": "2",
      "POS": "G",
      "TEAM": "CHI"
  },
  {
      "NBA_ID": 1628964,
      "FULL_NAME": "Mo Bamba",
      "FNAME": "Mo",
      "LNAME": "Bamba",
      "JERSEY_NUM": "5",
      "POS": "C",
      "TEAM": "ORL"
  },
  {
      "NBA_ID": 1630217,
      "FULL_NAME": "Desmond Bane",
      "FNAME": "Desmond",
      "LNAME": "Bane",
      "JERSEY_NUM": "22",
      "POS": "G",
      "TEAM": "MEM"
  },
  {
      "NBA_ID": 1630625,
      "FULL_NAME": "Dalano Banton",
      "FNAME": "Dalano",
      "LNAME": "Banton",
      "JERSEY_NUM": "45",
      "POS": "F",
      "TEAM": "TOR"
  },
  {
      "NBA_ID": 1627760,
      "FULL_NAME": "Cat Barber",
      "FNAME": "Cat",
      "LNAME": "Barber",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 203084,
      "FULL_NAME": "Harrison Barnes",
      "FNAME": "Harrison",
      "LNAME": "Barnes",
      "JERSEY_NUM": "40",
      "POS": "F",
      "TEAM": "SAC"
  },
  {
      "NBA_ID": 1630567,
      "FULL_NAME": "Scottie Barnes",
      "FNAME": "Scottie",
      "LNAME": "Barnes",
      "JERSEY_NUM": "4",
      "POS": "F",
      "TEAM": "TOR"
  },
  {
      "NBA_ID": 1629628,
      "FULL_NAME": "RJ Barrett",
      "FNAME": "RJ",
      "LNAME": "Barrett",
      "JERSEY_NUM": "9",
      "POS": "F-G",
      "TEAM": "NYK"
  },
  {
      "NBA_ID": 203115,
      "FULL_NAME": "Will Barton",
      "FNAME": "Will",
      "LNAME": "Barton",
      "JERSEY_NUM": "5",
      "POS": "G",
      "TEAM": "DEN"
  },
  {
      "NBA_ID": 1628238,
      "FULL_NAME": "Paris Bass",
      "FNAME": "Paris",
      "LNAME": "Bass",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 1629646,
      "FULL_NAME": "Charles Bassey",
      "FNAME": "Charles",
      "LNAME": "Bassey",
      "JERSEY_NUM": "23",
      "POS": "C-F",
      "TEAM": "PHI"
  },
  {
      "NBA_ID": 1628966,
      "FULL_NAME": "Keita Bates-Diop",
      "FNAME": "Keita",
      "LNAME": "Bates-Diop",
      "JERSEY_NUM": "31",
      "POS": "F",
      "TEAM": "SAS"
  },
  {
      "NBA_ID": 201587,
      "FULL_NAME": "Nicolas Batum",
      "FNAME": "Nicolas",
      "LNAME": "Batum",
      "JERSEY_NUM": "33",
      "POS": "G-F",
      "TEAM": "LAC"
  },
  {
      "NBA_ID": 203145,
      "FULL_NAME": "Kent Bazemore",
      "FNAME": "Kent",
      "LNAME": "Bazemore",
      "JERSEY_NUM": "9",
      "POS": "G-F",
      "TEAM": "LAL"
  },
  {
      "NBA_ID": 1629647,
      "FULL_NAME": "Darius Bazley",
      "FNAME": "Darius",
      "LNAME": "Bazley",
      "JERSEY_NUM": "7",
      "POS": "F",
      "TEAM": "OKC"
  },
  {
      "NBA_ID": 203078,
      "FULL_NAME": "Bradley Beal",
      "FNAME": "Bradley",
      "LNAME": "Beal",
      "JERSEY_NUM": "3",
      "POS": "G",
      "TEAM": "WAS"
  },
  {
      "NBA_ID": 1627736,
      "FULL_NAME": "Malik Beasley",
      "FNAME": "Malik",
      "LNAME": "Beasley",
      "JERSEY_NUM": "5",
      "POS": "G",
      "TEAM": "MIN"
  },
  {
      "NBA_ID": 1628395,
      "FULL_NAME": "Jordan Bell",
      "FNAME": "Jordan",
      "LNAME": "Bell",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 1627761,
      "FULL_NAME": "DeAndre' Bembry",
      "FNAME": "DeAndre'",
      "LNAME": "Bembry",
      "JERSEY_NUM": "95",
      "POS": "G-F",
      "TEAM": "MIL"
  },
  {
      "NBA_ID": 202722,
      "FULL_NAME": "Davis Bertans",
      "FNAME": "Davis",
      "LNAME": "Bertans",
      "JERSEY_NUM": "42",
      "POS": "F",
      "TEAM": "DAL"
  },
  {
      "NBA_ID": 201976,
      "FULL_NAME": "Patrick Beverley",
      "FNAME": "Patrick",
      "LNAME": "Beverley",
      "JERSEY_NUM": "22",
      "POS": "G",
      "TEAM": "MIN"
  },
  {
      "NBA_ID": 1630180,
      "FULL_NAME": "Saddiq Bey",
      "FNAME": "Saddiq",
      "LNAME": "Bey",
      "JERSEY_NUM": "41",
      "POS": "F",
      "TEAM": "DET"
  },
  {
      "NBA_ID": 203920,
      "FULL_NAME": "Khem Birch",
      "FNAME": "Khem",
      "LNAME": "Birch",
      "JERSEY_NUM": "24",
      "POS": "C",
      "TEAM": "TOR"
  },
  {
      "NBA_ID": 1629048,
      "FULL_NAME": "Goga Bitadze",
      "FNAME": "Goga",
      "LNAME": "Bitadze",
      "JERSEY_NUM": "88",
      "POS": "C-F",
      "TEAM": "IND"
  },
  {
      "NBA_ID": 202687,
      "FULL_NAME": "Bismack Biyombo",
      "FNAME": "Bismack",
      "LNAME": "Biyombo",
      "JERSEY_NUM": "18",
      "POS": "C",
      "TEAM": "PHX"
  },
  {
      "NBA_ID": 202357,
      "FULL_NAME": "Nemanja Bjelica",
      "FNAME": "Nemanja",
      "LNAME": "Bjelica",
      "JERSEY_NUM": "8",
      "POS": "F",
      "TEAM": "GSW"
  },
  {
      "NBA_ID": 202339,
      "FULL_NAME": "Eric Bledsoe",
      "FNAME": "Eric",
      "LNAME": "Bledsoe",
      "JERSEY_NUM": "5",
      "POS": "G",
      "TEAM": "POR"
  },
  {
      "NBA_ID": 1629833,
      "FULL_NAME": "Keljin Blevins",
      "FNAME": "Keljin",
      "LNAME": "Blevins",
      "JERSEY_NUM": "21",
      "POS": "G",
      "TEAM": "POR"
  },
  {
      "NBA_ID": 203992,
      "FULL_NAME": "Bogdan Bogdanovic",
      "FNAME": "Bogdan",
      "LNAME": "Bogdanovic",
      "JERSEY_NUM": "13",
      "POS": "G",
      "TEAM": "ATL"
  },
  {
      "NBA_ID": 202711,
      "FULL_NAME": "Bojan Bogdanovic",
      "FNAME": "Bojan",
      "LNAME": "Bogdanovic",
      "JERSEY_NUM": "44",
      "POS": "F",
      "TEAM": "UTA"
  },
  {
      "NBA_ID": 1629626,
      "FULL_NAME": "Bol Bol",
      "FNAME": "Bol",
      "LNAME": "Bol",
      "JERSEY_NUM": "10",
      "POS": "C-F",
      "TEAM": "ORL"
  },
  {
      "NBA_ID": 1630195,
      "FULL_NAME": "Leandro Bolmaro",
      "FNAME": "Leandro",
      "LNAME": "Bolmaro",
      "JERSEY_NUM": "9",
      "POS": "F",
      "TEAM": "MIN"
  },
  {
      "NBA_ID": 1629067,
      "FULL_NAME": "Isaac Bonga",
      "FNAME": "Isaac",
      "LNAME": "Bonga",
      "JERSEY_NUM": "17",
      "POS": "G",
      "TEAM": "TOR"
  },
  {
      "NBA_ID": 1626164,
      "FULL_NAME": "Devin Booker",
      "FNAME": "Devin",
      "LNAME": "Booker",
      "JERSEY_NUM": "1",
      "POS": "G",
      "TEAM": "PHX"
  },
  {
      "NBA_ID": 1630527,
      "FULL_NAME": "Brandon Boston Jr.",
      "FNAME": "Brandon",
      "LNAME": "Boston Jr.",
      "JERSEY_NUM": "4",
      "POS": "G",
      "TEAM": "LAC"
  },
  {
      "NBA_ID": 1628449,
      "FULL_NAME": "Chris Boucher",
      "FNAME": "Chris",
      "LNAME": "Boucher",
      "JERSEY_NUM": "25",
      "POS": "F-C",
      "TEAM": "TOR"
  },
  {
      "NBA_ID": 1630547,
      "FULL_NAME": "James Bouknight",
      "FNAME": "James",
      "LNAME": "Bouknight",
      "JERSEY_NUM": "5",
      "POS": "G",
      "TEAM": "CHA"
  },
  {
      "NBA_ID": 202340,
      "FULL_NAME": "Avery Bradley",
      "FNAME": "Avery",
      "LNAME": "Bradley",
      "JERSEY_NUM": "20",
      "POS": "G",
      "TEAM": "LAL"
  },
  {
      "NBA_ID": 1628396,
      "FULL_NAME": "Tony Bradley",
      "FNAME": "Tony",
      "LNAME": "Bradley",
      "JERSEY_NUM": "13",
      "POS": "C-F",
      "TEAM": "CHI"
  },
  {
      "NBA_ID": 1629649,
      "FULL_NAME": "Ignas Brazdeikis",
      "FNAME": "Ignas",
      "LNAME": "Brazdeikis",
      "JERSEY_NUM": "17",
      "POS": "F",
      "TEAM": "ORL"
  },
  {
      "NBA_ID": 1628969,
      "FULL_NAME": "Mikal Bridges",
      "FNAME": "Mikal",
      "LNAME": "Bridges",
      "JERSEY_NUM": "25",
      "POS": "F",
      "TEAM": "PHX"
  },
  {
      "NBA_ID": 1628970,
      "FULL_NAME": "Miles Bridges",
      "FNAME": "Miles",
      "LNAME": "Bridges",
      "JERSEY_NUM": "0",
      "POS": "F",
      "TEAM": "CHA"
  },
  {
      "NBA_ID": 1629052,
      "FULL_NAME": "Oshae Brissett",
      "FNAME": "Oshae",
      "LNAME": "Brissett",
      "JERSEY_NUM": "12",
      "POS": "F-G",
      "TEAM": "IND"
  },
  {
      "NBA_ID": 1627763,
      "FULL_NAME": "Malcolm Brogdon",
      "FNAME": "Malcolm",
      "LNAME": "Brogdon",
      "JERSEY_NUM": "7",
      "POS": "G",
      "TEAM": "IND"
  },
  {
      "NBA_ID": 1629717,
      "FULL_NAME": "Armoni Brooks",
      "FNAME": "Armoni",
      "LNAME": "Brooks",
      "JERSEY_NUM": "7",
      "POS": "G",
      "TEAM": "TOR"
  },
  {
      "NBA_ID": 1628415,
      "FULL_NAME": "Dillon Brooks",
      "FNAME": "Dillon",
      "LNAME": "Brooks",
      "JERSEY_NUM": "24",
      "POS": "G-F",
      "TEAM": "MEM"
  },
  {
      "NBA_ID": 1628971,
      "FULL_NAME": "Bruce Brown",
      "FNAME": "Bruce",
      "LNAME": "Brown",
      "JERSEY_NUM": "1",
      "POS": "G-F",
      "TEAM": "BKN"
  },
  {
      "NBA_ID": 1627759,
      "FULL_NAME": "Jaylen Brown",
      "FNAME": "Jaylen",
      "LNAME": "Brown",
      "JERSEY_NUM": "7",
      "POS": "G-F",
      "TEAM": "BOS"
  },
  {
      "NBA_ID": 1629650,
      "FULL_NAME": "Moses Brown",
      "FNAME": "Moses",
      "LNAME": "Brown",
      "JERSEY_NUM": null,
      "POS": "C",
      "TEAM": null
  },
  {
      "NBA_ID": 1628425,
      "FULL_NAME": "Sterling Brown",
      "FNAME": "Sterling",
      "LNAME": "Brown",
      "JERSEY_NUM": "0",
      "POS": "G-F",
      "TEAM": "DAL"
  },
  {
      "NBA_ID": 1630535,
      "FULL_NAME": "Greg Brown III",
      "FNAME": "Greg",
      "LNAME": "Brown III",
      "JERSEY_NUM": "4",
      "POS": "F",
      "TEAM": "POR"
  },
  {
      "NBA_ID": 1629718,
      "FULL_NAME": "Charlie Brown Jr.",
      "FNAME": "Charlie",
      "LNAME": "Brown Jr.",
      "JERSEY_NUM": "16",
      "POS": "G",
      "TEAM": "PHI"
  },
  {
      "NBA_ID": 1630602,
      "FULL_NAME": "Chaundee Brown Jr.",
      "FNAME": "Chaundee",
      "LNAME": "Brown Jr.",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 1628972,
      "FULL_NAME": "Troy Brown Jr.",
      "FNAME": "Troy",
      "LNAME": "Brown Jr.",
      "JERSEY_NUM": "7",
      "POS": "G-F",
      "TEAM": "CHI"
  },
  {
      "NBA_ID": 1628973,
      "FULL_NAME": "Jalen Brunson",
      "FNAME": "Jalen",
      "LNAME": "Brunson",
      "JERSEY_NUM": "13",
      "POS": "G",
      "TEAM": "DAL"
  },
  {
      "NBA_ID": 1628418,
      "FULL_NAME": "Thomas Bryant",
      "FNAME": "Thomas",
      "LNAME": "Bryant",
      "JERSEY_NUM": "13",
      "POS": "C-F",
      "TEAM": "WAS"
  },
  {
      "NBA_ID": 1629783,
      "FULL_NAME": "Shaq Buchanan",
      "FNAME": "Shaq",
      "LNAME": "Buchanan",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 203493,
      "FULL_NAME": "Reggie Bullock",
      "FNAME": "Reggie",
      "LNAME": "Bullock",
      "JERSEY_NUM": "25",
      "POS": "G-F",
      "TEAM": "DAL"
  },
  {
      "NBA_ID": 203504,
      "FULL_NAME": "Trey Burke",
      "FNAME": "Trey",
      "LNAME": "Burke",
      "JERSEY_NUM": "3",
      "POS": "G",
      "TEAM": "DAL"
  },
  {
      "NBA_ID": 202692,
      "FULL_NAME": "Alec Burks",
      "FNAME": "Alec",
      "LNAME": "Burks",
      "JERSEY_NUM": "18",
      "POS": "G",
      "TEAM": "NYK"
  },
  {
      "NBA_ID": 1630215,
      "FULL_NAME": "Jared Butler",
      "FNAME": "Jared",
      "LNAME": "Butler",
      "JERSEY_NUM": "13",
      "POS": "G",
      "TEAM": "UTA"
  },
  {
      "NBA_ID": 202710,
      "FULL_NAME": "Jimmy Butler",
      "FNAME": "Jimmy",
      "LNAME": "Butler",
      "JERSEY_NUM": "22",
      "POS": "F",
      "TEAM": "MIA"
  },
  {
      "NBA_ID": 1629719,
      "FULL_NAME": "Devontae Cacok",
      "FNAME": "Devontae",
      "LNAME": "Cacok",
      "JERSEY_NUM": "18",
      "POS": "F",
      "TEAM": "SAS"
  },
  {
      "NBA_ID": 203484,
      "FULL_NAME": "Kentavious Caldwell-Pope",
      "FNAME": "Kentavious",
      "LNAME": "Caldwell-Pope",
      "JERSEY_NUM": "1",
      "POS": "G",
      "TEAM": "WAS"
  },
  {
      "NBA_ID": 1630267,
      "FULL_NAME": "Facundo Campazzo",
      "FNAME": "Facundo",
      "LNAME": "Campazzo",
      "JERSEY_NUM": "7",
      "POS": "G",
      "TEAM": "DEN"
  },
  {
      "NBA_ID": 1628427,
      "FULL_NAME": "Vlatko Cancar",
      "FNAME": "Vlatko",
      "LNAME": "Cancar",
      "JERSEY_NUM": "31",
      "POS": "F",
      "TEAM": "DEN"
  },
  {
      "NBA_ID": 203991,
      "FULL_NAME": "Clint Capela",
      "FNAME": "Clint",
      "LNAME": "Capela",
      "JERSEY_NUM": "15",
      "POS": "C",
      "TEAM": "ATL"
  },
  {
      "NBA_ID": 1630176,
      "FULL_NAME": "Vernon Carey Jr.",
      "FNAME": "Vernon",
      "LNAME": "Carey Jr.",
      "JERSEY_NUM": "22",
      "POS": "F-C",
      "TEAM": "WAS"
  },
  {
      "NBA_ID": 1628975,
      "FULL_NAME": "Jevon Carter",
      "FNAME": "Jevon",
      "LNAME": "Carter",
      "JERSEY_NUM": "5",
      "POS": "G",
      "TEAM": "MIL"
  },
  {
      "NBA_ID": 1628976,
      "FULL_NAME": "Wendell Carter Jr.",
      "FNAME": "Wendell",
      "LNAME": "Carter Jr.",
      "JERSEY_NUM": "34",
      "POS": "C-F",
      "TEAM": "ORL"
  },
  {
      "NBA_ID": 1627936,
      "FULL_NAME": "Alex Caruso",
      "FNAME": "Alex",
      "LNAME": "Caruso",
      "JERSEY_NUM": "6",
      "POS": "G",
      "TEAM": "CHI"
  },
  {
      "NBA_ID": 1626161,
      "FULL_NAME": "Willie Cauley-Stein",
      "FNAME": "Willie",
      "LNAME": "Cauley-Stein",
      "JERSEY_NUM": null,
      "POS": "C",
      "TEAM": null
  },
  {
      "NBA_ID": 1629958,
      "FULL_NAME": "Ahmad Caver",
      "FNAME": "Ahmad",
      "LNAME": "Caver",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1630551,
      "FULL_NAME": "Justin Champagnie",
      "FNAME": "Justin",
      "LNAME": "Champagnie",
      "JERSEY_NUM": "11",
      "POS": "G-F",
      "TEAM": "TOR"
  },
  {
      "NBA_ID": 1629597,
      "FULL_NAME": "Zylan Cheatham",
      "FNAME": "Zylan",
      "LNAME": "Cheatham",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 1629185,
      "FULL_NAME": "Chris Chiozza",
      "FNAME": "Chris",
      "LNAME": "Chiozza",
      "JERSEY_NUM": "2",
      "POS": "G",
      "TEAM": "GSW"
  },
  {
      "NBA_ID": 1627737,
      "FULL_NAME": "Marquese Chriss",
      "FNAME": "Marquese",
      "LNAME": "Chriss",
      "JERSEY_NUM": "35",
      "POS": "F",
      "TEAM": "DAL"
  },
  {
      "NBA_ID": 1630528,
      "FULL_NAME": "Josh Christopher",
      "FNAME": "Josh",
      "LNAME": "Christopher",
      "JERSEY_NUM": "9",
      "POS": "G",
      "TEAM": "HOU"
  },
  {
      "NBA_ID": 1629109,
      "FULL_NAME": "Gary Clark",
      "FNAME": "Gary",
      "LNAME": "Clark",
      "JERSEY_NUM": "12",
      "POS": "F",
      "TEAM": "NOP"
  },
  {
      "NBA_ID": 1629634,
      "FULL_NAME": "Brandon Clarke",
      "FNAME": "Brandon",
      "LNAME": "Clarke",
      "JERSEY_NUM": "15",
      "POS": "F",
      "TEAM": "MEM"
  },
  {
      "NBA_ID": 203903,
      "FULL_NAME": "Jordan Clarkson",
      "FNAME": "Jordan",
      "LNAME": "Clarkson",
      "JERSEY_NUM": "00",
      "POS": "G",
      "TEAM": "UTA"
  },
  {
      "NBA_ID": 1629651,
      "FULL_NAME": "Nic Claxton",
      "FNAME": "Nic",
      "LNAME": "Claxton",
      "JERSEY_NUM": "33",
      "POS": "F-C",
      "TEAM": "BKN"
  },
  {
      "NBA_ID": 1629599,
      "FULL_NAME": "Amir Coffey",
      "FNAME": "Amir",
      "LNAME": "Coffey",
      "JERSEY_NUM": "7",
      "POS": "G-F",
      "TEAM": "LAC"
  },
  {
      "NBA_ID": 1628381,
      "FULL_NAME": "John Collins",
      "FNAME": "John",
      "LNAME": "Collins",
      "JERSEY_NUM": "20",
      "POS": "F-C",
      "TEAM": "ATL"
  },
  {
      "NBA_ID": 1628380,
      "FULL_NAME": "Zach Collins",
      "FNAME": "Zach",
      "LNAME": "Collins",
      "JERSEY_NUM": "23",
      "POS": "F-C",
      "TEAM": "SAS"
  },
  {
      "NBA_ID": 201954,
      "FULL_NAME": "Darren Collison",
      "FNAME": "Darren",
      "LNAME": "Collison",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 201144,
      "FULL_NAME": "Mike Conley",
      "FNAME": "Mike",
      "LNAME": "Conley",
      "JERSEY_NUM": "11",
      "POS": "G",
      "TEAM": "UTA"
  },
  {
      "NBA_ID": 1626192,
      "FULL_NAME": "Pat Connaughton",
      "FNAME": "Pat",
      "LNAME": "Connaughton",
      "JERSEY_NUM": "24",
      "POS": "G",
      "TEAM": "MIL"
  },
  {
      "NBA_ID": 1629076,
      "FULL_NAME": "Tyler Cook",
      "FNAME": "Tyler",
      "LNAME": "Cook",
      "JERSEY_NUM": "25",
      "POS": "F",
      "TEAM": "CHI"
  },
  {
      "NBA_ID": 1630536,
      "FULL_NAME": "Sharife Cooper",
      "FNAME": "Sharife",
      "LNAME": "Cooper",
      "JERSEY_NUM": "2",
      "POS": "G",
      "TEAM": "ATL"
  },
  {
      "NBA_ID": 1627822,
      "FULL_NAME": "Petr Cornelie",
      "FNAME": "Petr",
      "LNAME": "Cornelie",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 202326,
      "FULL_NAME": "DeMarcus Cousins",
      "FNAME": "DeMarcus",
      "LNAME": "Cousins",
      "JERSEY_NUM": "4",
      "POS": "C",
      "TEAM": "DEN"
  },
  {
      "NBA_ID": 203496,
      "FULL_NAME": "Robert Covington",
      "FNAME": "Robert",
      "LNAME": "Covington",
      "JERSEY_NUM": "23",
      "POS": "F",
      "TEAM": "LAC"
  },
  {
      "NBA_ID": 1628470,
      "FULL_NAME": "Torrey Craig",
      "FNAME": "Torrey",
      "LNAME": "Craig",
      "JERSEY_NUM": "0",
      "POS": "F",
      "TEAM": "PHX"
  },
  {
      "NBA_ID": 203109,
      "FULL_NAME": "Jae Crowder",
      "FNAME": "Jae",
      "LNAME": "Crowder",
      "JERSEY_NUM": "99",
      "POS": "F",
      "TEAM": "PHX"
  },
  {
      "NBA_ID": 1629633,
      "FULL_NAME": "Jarrett Culver",
      "FNAME": "Jarrett",
      "LNAME": "Culver",
      "JERSEY_NUM": "23",
      "POS": "G-F",
      "TEAM": "MEM"
  },
  {
      "NBA_ID": 1629600,
      "FULL_NAME": "Jarron Cumberland",
      "FNAME": "Jarron",
      "LNAME": "Cumberland",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1630595,
      "FULL_NAME": "Cade Cunningham",
      "FNAME": "Cade",
      "LNAME": "Cunningham",
      "JERSEY_NUM": "2",
      "POS": "G",
      "TEAM": "DET"
  },
  {
      "NBA_ID": 203552,
      "FULL_NAME": "Seth Curry",
      "FNAME": "Seth",
      "LNAME": "Curry",
      "JERSEY_NUM": "30",
      "POS": "G",
      "TEAM": "BKN"
  },
  {
      "NBA_ID": 201939,
      "FULL_NAME": "Stephen Curry",
      "FNAME": "Stephen",
      "LNAME": "Curry",
      "JERSEY_NUM": "30",
      "POS": "G",
      "TEAM": "GSW"
  },
  {
      "NBA_ID": 203076,
      "FULL_NAME": "Anthony Davis",
      "FNAME": "Anthony",
      "LNAME": "Davis",
      "JERSEY_NUM": "3",
      "POS": "F-C",
      "TEAM": "LAL"
  },
  {
      "NBA_ID": 202334,
      "FULL_NAME": "Ed Davis",
      "FNAME": "Ed",
      "LNAME": "Davis",
      "JERSEY_NUM": "21",
      "POS": "C-F",
      "TEAM": "CLE"
  },
  {
      "NBA_ID": 1629056,
      "FULL_NAME": "Terence Davis",
      "FNAME": "Terence",
      "LNAME": "Davis",
      "JERSEY_NUM": "3",
      "POS": "G",
      "TEAM": "SAC"
  },
  {
      "NBA_ID": 1629602,
      "FULL_NAME": "Javin DeLaurier",
      "FNAME": "Javin",
      "LNAME": "DeLaurier",
      "JERSEY_NUM": null,
      "POS": "C",
      "TEAM": null
  },
  {
      "NBA_ID": 201942,
      "FULL_NAME": "DeMar DeRozan",
      "FNAME": "DeMar",
      "LNAME": "DeRozan",
      "JERSEY_NUM": "11",
      "POS": "G-F",
      "TEAM": "CHI"
  },
  {
      "NBA_ID": 1630466,
      "FULL_NAME": "Gabriel Deck",
      "FNAME": "Gabriel",
      "LNAME": "Deck",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 203473,
      "FULL_NAME": "Dewayne Dedmon",
      "FNAME": "Dewayne",
      "LNAME": "Dedmon",
      "JERSEY_NUM": "21",
      "POS": "C",
      "TEAM": "MIA"
  },
  {
      "NBA_ID": 1626155,
      "FULL_NAME": "Sam Dekker",
      "FNAME": "Sam",
      "LNAME": "Dekker",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 1628978,
      "FULL_NAME": "Donte DiVincenzo",
      "FNAME": "Donte",
      "LNAME": "DiVincenzo",
      "JERSEY_NUM": "0",
      "POS": "G",
      "TEAM": "SAC"
  },
  {
      "NBA_ID": 1629603,
      "FULL_NAME": "Mamadi Diakite",
      "FNAME": "Mamadi",
      "LNAME": "Diakite",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 1627767,
      "FULL_NAME": "Cheick Diallo",
      "FNAME": "Cheick",
      "LNAME": "Diallo",
      "JERSEY_NUM": null,
      "POS": "F-C",
      "TEAM": null
  },
  {
      "NBA_ID": 1628977,
      "FULL_NAME": "Hamidou Diallo",
      "FNAME": "Hamidou",
      "LNAME": "Diallo",
      "JERSEY_NUM": "6",
      "POS": "G",
      "TEAM": "DET"
  },
  {
      "NBA_ID": 203476,
      "FULL_NAME": "Gorgui Dieng",
      "FNAME": "Gorgui",
      "LNAME": "Dieng",
      "JERSEY_NUM": "10",
      "POS": "C",
      "TEAM": "ATL"
  },
  {
      "NBA_ID": 203915,
      "FULL_NAME": "Spencer Dinwiddie",
      "FNAME": "Spencer",
      "LNAME": "Dinwiddie",
      "JERSEY_NUM": "26",
      "POS": "G",
      "TEAM": "DAL"
  },
  {
      "NBA_ID": 1629029,
      "FULL_NAME": "Luka Doncic",
      "FNAME": "Luka",
      "LNAME": "Doncic",
      "JERSEY_NUM": "77",
      "POS": "F-G",
      "TEAM": "DAL"
  },
  {
      "NBA_ID": 1629652,
      "FULL_NAME": "Luguentz Dort",
      "FNAME": "Luguentz",
      "LNAME": "Dort",
      "JERSEY_NUM": "5",
      "POS": "G",
      "TEAM": "OKC"
  },
  {
      "NBA_ID": 1630245,
      "FULL_NAME": "Ayo Dosunmu",
      "FNAME": "Ayo",
      "LNAME": "Dosunmu",
      "JERSEY_NUM": "12",
      "POS": "G",
      "TEAM": "CHI"
  },
  {
      "NBA_ID": 1628422,
      "FULL_NAME": "Damyean Dotson",
      "FNAME": "Damyean",
      "LNAME": "Dotson",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1629653,
      "FULL_NAME": "Devon Dotson",
      "FNAME": "Devon",
      "LNAME": "Dotson",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1629635,
      "FULL_NAME": "Sekou Doumbouya",
      "FNAME": "Sekou",
      "LNAME": "Doumbouya",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 1630288,
      "FULL_NAME": "Jeff Dowtin",
      "FNAME": "Jeff",
      "LNAME": "Dowtin",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1628408,
      "FULL_NAME": "P.J. Dozier",
      "FNAME": "P.J.",
      "LNAME": "Dozier",
      "JERSEY_NUM": null,
      "POS": "G-F",
      "TEAM": null
  },
  {
      "NBA_ID": 201609,
      "FULL_NAME": "Goran Dragic",
      "FNAME": "Goran",
      "LNAME": "Dragic",
      "JERSEY_NUM": "9",
      "POS": "G",
      "TEAM": "BKN"
  },
  {
      "NBA_ID": 203083,
      "FULL_NAME": "Andre Drummond",
      "FNAME": "Andre",
      "LNAME": "Drummond",
      "JERSEY_NUM": "0",
      "POS": "C",
      "TEAM": "BKN"
  },
  {
      "NBA_ID": 1630537,
      "FULL_NAME": "Chris Duarte",
      "FNAME": "Chris",
      "LNAME": "Duarte",
      "JERSEY_NUM": "3",
      "POS": "G",
      "TEAM": "IND"
  },
  {
      "NBA_ID": 1630561,
      "FULL_NAME": "David Duke Jr.",
      "FNAME": "David",
      "LNAME": "Duke Jr.",
      "JERSEY_NUM": "6",
      "POS": "G",
      "TEAM": "BKN"
  },
  {
      "NBA_ID": 201142,
      "FULL_NAME": "Kevin Durant",
      "FNAME": "Kevin",
      "LNAME": "Durant",
      "JERSEY_NUM": "7",
      "POS": "F",
      "TEAM": "BKN"
  },
  {
      "NBA_ID": 1630693,
      "FULL_NAME": "Jaime Echenique",
      "FNAME": "Jaime",
      "LNAME": "Echenique",
      "JERSEY_NUM": null,
      "POS": "C",
      "TEAM": null
  },
  {
      "NBA_ID": 1630162,
      "FULL_NAME": "Anthony Edwards",
      "FNAME": "Anthony",
      "LNAME": "Edwards",
      "JERSEY_NUM": "1",
      "POS": "G",
      "TEAM": "MIN"
  },
  {
      "NBA_ID": 1630556,
      "FULL_NAME": "Kessler Edwards",
      "FNAME": "Kessler",
      "LNAME": "Edwards",
      "JERSEY_NUM": "14",
      "POS": "F",
      "TEAM": "BKN"
  },
  {
      "NBA_ID": 1630306,
      "FULL_NAME": "Rob Edwards",
      "FNAME": "Rob",
      "LNAME": "Edwards",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1629604,
      "FULL_NAME": "CJ Elleby",
      "FNAME": "CJ",
      "LNAME": "Elleby",
      "JERSEY_NUM": "16",
      "POS": "F-G",
      "TEAM": "POR"
  },
  {
      "NBA_ID": 201961,
      "FULL_NAME": "Wayne Ellington",
      "FNAME": "Wayne",
      "LNAME": "Ellington",
      "JERSEY_NUM": "2",
      "POS": "G",
      "TEAM": "LAL"
  },
  {
      "NBA_ID": 203954,
      "FULL_NAME": "Joel Embiid",
      "FNAME": "Joel",
      "LNAME": "Embiid",
      "JERSEY_NUM": "21",
      "POS": "C-F",
      "TEAM": "PHI"
  },
  {
      "NBA_ID": 203516,
      "FULL_NAME": "James Ennis III",
      "FNAME": "James",
      "LNAME": "Ennis III",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 1629234,
      "FULL_NAME": "Drew Eubanks",
      "FNAME": "Drew",
      "LNAME": "Eubanks",
      "JERSEY_NUM": "14",
      "POS": "F-C",
      "TEAM": "POR"
  },
  {
      "NBA_ID": 1629605,
      "FULL_NAME": "Tacko Fall",
      "FNAME": "Tacko",
      "LNAME": "Fall",
      "JERSEY_NUM": null,
      "POS": "C",
      "TEAM": null
  },
  {
      "NBA_ID": 202324,
      "FULL_NAME": "Derrick Favors",
      "FNAME": "Derrick",
      "LNAME": "Favors",
      "JERSEY_NUM": "15",
      "POS": "F",
      "TEAM": "OKC"
  },
  {
      "NBA_ID": 1628981,
      "FULL_NAME": "Bruno Fernando",
      "FNAME": "Bruno",
      "LNAME": "Fernando",
      "JERSEY_NUM": "20",
      "POS": "F-C",
      "TEAM": "HOU"
  },
  {
      "NBA_ID": 1627827,
      "FULL_NAME": "Dorian Finney-Smith",
      "FNAME": "Dorian",
      "LNAME": "Finney-Smith",
      "JERSEY_NUM": "10",
      "POS": "F",
      "TEAM": "DAL"
  },
  {
      "NBA_ID": 1630238,
      "FULL_NAME": "Malik Fitts",
      "FNAME": "Malik",
      "LNAME": "Fitts",
      "JERSEY_NUM": "24",
      "POS": "F",
      "TEAM": "BOS"
  },
  {
      "NBA_ID": 1630201,
      "FULL_NAME": "Malachi Flynn",
      "FNAME": "Malachi",
      "LNAME": "Flynn",
      "JERSEY_NUM": "22",
      "POS": "G",
      "TEAM": "TOR"
  },
  {
      "NBA_ID": 1627854,
      "FULL_NAME": "Bryn Forbes",
      "FNAME": "Bryn",
      "LNAME": "Forbes",
      "JERSEY_NUM": "6",
      "POS": "G",
      "TEAM": "DEN"
  },
  {
      "NBA_ID": 1630758,
      "FULL_NAME": "Aleem Ford",
      "FNAME": "Aleem",
      "LNAME": "Ford",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 1630235,
      "FULL_NAME": "Trent Forrest",
      "FNAME": "Trent",
      "LNAME": "Forrest",
      "JERSEY_NUM": "3",
      "POS": "G",
      "TEAM": "UTA"
  },
  {
      "NBA_ID": 203095,
      "FULL_NAME": "Evan Fournier",
      "FNAME": "Evan",
      "LNAME": "Fournier",
      "JERSEY_NUM": "13",
      "POS": "G-F",
      "TEAM": "NYK"
  },
  {
      "NBA_ID": 1628368,
      "FULL_NAME": "De'Aaron Fox",
      "FNAME": "De'Aaron",
      "LNAME": "Fox",
      "JERSEY_NUM": "5",
      "POS": "G",
      "TEAM": "SAC"
  },
  {
      "NBA_ID": 204025,
      "FULL_NAME": "Tim Frazier",
      "FNAME": "Tim",
      "LNAME": "Frazier",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 202683,
      "FULL_NAME": "Enes Freedom",
      "FNAME": "Enes",
      "LNAME": "Freedom",
      "JERSEY_NUM": null,
      "POS": "C",
      "TEAM": null
  },
  {
      "NBA_ID": 1628365,
      "FULL_NAME": "Markelle Fultz",
      "FNAME": "Markelle",
      "LNAME": "Fultz",
      "JERSEY_NUM": "20",
      "POS": "G",
      "TEAM": "ORL"
  },
  {
      "NBA_ID": 1629117,
      "FULL_NAME": "Wenyen Gabriel",
      "FNAME": "Wenyen",
      "LNAME": "Gabriel",
      "JERSEY_NUM": "35",
      "POS": "F",
      "TEAM": "LAL"
  },
  {
      "NBA_ID": 1629655,
      "FULL_NAME": "Daniel Gafford",
      "FNAME": "Daniel",
      "LNAME": "Gafford",
      "JERSEY_NUM": "21",
      "POS": "F-C",
      "TEAM": "WAS"
  },
  {
      "NBA_ID": 201568,
      "FULL_NAME": "Danilo Gallinari",
      "FNAME": "Danilo",
      "LNAME": "Gallinari",
      "JERSEY_NUM": "8",
      "POS": "F",
      "TEAM": "ATL"
  },
  {
      "NBA_ID": 204038,
      "FULL_NAME": "Langston Galloway",
      "FNAME": "Langston",
      "LNAME": "Galloway",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1629636,
      "FULL_NAME": "Darius Garland",
      "FNAME": "Darius",
      "LNAME": "Garland",
      "JERSEY_NUM": "10",
      "POS": "G",
      "TEAM": "CLE"
  },
  {
      "NBA_ID": 1630585,
      "FULL_NAME": "Marcus Garrett",
      "FNAME": "Marcus",
      "LNAME": "Garrett",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1630586,
      "FULL_NAME": "Usman Garuba",
      "FNAME": "Usman",
      "LNAME": "Garuba",
      "JERSEY_NUM": "16",
      "POS": "F",
      "TEAM": "HOU"
  },
  {
      "NBA_ID": 1630568,
      "FULL_NAME": "Luka Garza",
      "FNAME": "Luka",
      "LNAME": "Garza",
      "JERSEY_NUM": "55",
      "POS": "C",
      "TEAM": "DET"
  },
  {
      "NBA_ID": 200752,
      "FULL_NAME": "Rudy Gay",
      "FNAME": "Rudy",
      "LNAME": "Gay",
      "JERSEY_NUM": "8",
      "POS": "F-G",
      "TEAM": "UTA"
  },
  {
      "NBA_ID": 202331,
      "FULL_NAME": "Paul George",
      "FNAME": "Paul",
      "LNAME": "George",
      "JERSEY_NUM": "13",
      "POS": "F",
      "TEAM": "LAC"
  },
  {
      "NBA_ID": 201959,
      "FULL_NAME": "Taj Gibson",
      "FNAME": "Taj",
      "LNAME": "Gibson",
      "JERSEY_NUM": "67",
      "POS": "F",
      "TEAM": "NYK"
  },
  {
      "NBA_ID": 1630581,
      "FULL_NAME": "Josh Giddey",
      "FNAME": "Josh",
      "LNAME": "Giddey",
      "JERSEY_NUM": "3",
      "POS": "G",
      "TEAM": "OKC"
  },
  {
      "NBA_ID": 1628983,
      "FULL_NAME": "Shai Gilgeous-Alexander",
      "FNAME": "Shai",
      "LNAME": "Gilgeous-Alexander",
      "JERSEY_NUM": "2",
      "POS": "G",
      "TEAM": "OKC"
  },
  {
      "NBA_ID": 1630264,
      "FULL_NAME": "Anthony Gill",
      "FNAME": "Anthony",
      "LNAME": "Gill",
      "JERSEY_NUM": "16",
      "POS": "F",
      "TEAM": "WAS"
  },
  {
      "NBA_ID": 1630273,
      "FULL_NAME": "Freddie Gillespie",
      "FNAME": "Freddie",
      "LNAME": "Gillespie",
      "JERSEY_NUM": null,
      "POS": "C",
      "TEAM": null
  },
  {
      "NBA_ID": 203497,
      "FULL_NAME": "Rudy Gobert",
      "FNAME": "Rudy",
      "LNAME": "Gobert",
      "JERSEY_NUM": "27",
      "POS": "C",
      "TEAM": "UTA"
  },
  {
      "NBA_ID": 1629164,
      "FULL_NAME": "Brandon Goodwin",
      "FNAME": "Brandon",
      "LNAME": "Goodwin",
      "JERSEY_NUM": "00",
      "POS": "G",
      "TEAM": "CLE"
  },
  {
      "NBA_ID": 1630692,
      "FULL_NAME": "Jordan Goodwin",
      "FNAME": "Jordan",
      "LNAME": "Goodwin",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 203932,
      "FULL_NAME": "Aaron Gordon",
      "FNAME": "Aaron",
      "LNAME": "Gordon",
      "JERSEY_NUM": "50",
      "POS": "F",
      "TEAM": "DEN"
  },
  {
      "NBA_ID": 201569,
      "FULL_NAME": "Eric Gordon",
      "FNAME": "Eric",
      "LNAME": "Gordon",
      "JERSEY_NUM": "10",
      "POS": "G",
      "TEAM": "HOU"
  },
  {
      "NBA_ID": 1628984,
      "FULL_NAME": "Devonte' Graham",
      "FNAME": "Devonte'",
      "LNAME": "Graham",
      "JERSEY_NUM": "4",
      "POS": "G",
      "TEAM": "NOP"
  },
  {
      "NBA_ID": 203924,
      "FULL_NAME": "Jerami Grant",
      "FNAME": "Jerami",
      "LNAME": "Grant",
      "JERSEY_NUM": "9",
      "POS": "F",
      "TEAM": "DET"
  },
  {
      "NBA_ID": 1629755,
      "FULL_NAME": "Hassani Gravett",
      "FNAME": "Hassani",
      "LNAME": "Gravett",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 201980,
      "FULL_NAME": "Danny Green",
      "FNAME": "Danny",
      "LNAME": "Green",
      "JERSEY_NUM": "14",
      "POS": "G",
      "TEAM": "PHI"
  },
  {
      "NBA_ID": 203110,
      "FULL_NAME": "Draymond Green",
      "FNAME": "Draymond",
      "LNAME": "Green",
      "JERSEY_NUM": "23",
      "POS": "F",
      "TEAM": "GSW"
  },
  {
      "NBA_ID": 203210,
      "FULL_NAME": "JaMychal Green",
      "FNAME": "JaMychal",
      "LNAME": "Green",
      "JERSEY_NUM": "0",
      "POS": "F-C",
      "TEAM": "DEN"
  },
  {
      "NBA_ID": 1630224,
      "FULL_NAME": "Jalen Green",
      "FNAME": "Jalen",
      "LNAME": "Green",
      "JERSEY_NUM": "0",
      "POS": "G",
      "TEAM": "HOU"
  },
  {
      "NBA_ID": 1629750,
      "FULL_NAME": "Javonte Green",
      "FNAME": "Javonte",
      "LNAME": "Green",
      "JERSEY_NUM": "24",
      "POS": "G-F",
      "TEAM": "CHI"
  },
  {
      "NBA_ID": 201145,
      "FULL_NAME": "Jeff Green",
      "FNAME": "Jeff",
      "LNAME": "Green",
      "JERSEY_NUM": "32",
      "POS": "F",
      "TEAM": "DEN"
  },
  {
      "NBA_ID": 1630182,
      "FULL_NAME": "Josh Green",
      "FNAME": "Josh",
      "LNAME": "Green",
      "JERSEY_NUM": "8",
      "POS": "G",
      "TEAM": "DAL"
  },
  {
      "NBA_ID": 201933,
      "FULL_NAME": "Blake Griffin",
      "FNAME": "Blake",
      "LNAME": "Griffin",
      "JERSEY_NUM": "2",
      "POS": "F",
      "TEAM": "BKN"
  },
  {
      "NBA_ID": 1629656,
      "FULL_NAME": "Quentin Grimes",
      "FNAME": "Quentin",
      "LNAME": "Grimes",
      "JERSEY_NUM": "6",
      "POS": "G",
      "TEAM": "NYK"
  },
  {
      "NBA_ID": 1629657,
      "FULL_NAME": "Kyle Guy",
      "FNAME": "Kyle",
      "LNAME": "Guy",
      "JERSEY_NUM": "5",
      "POS": "G",
      "TEAM": "MIA"
  },
  {
      "NBA_ID": 1629060,
      "FULL_NAME": "Rui Hachimura",
      "FNAME": "Rui",
      "LNAME": "Hachimura",
      "JERSEY_NUM": "8",
      "POS": "F",
      "TEAM": "WAS"
  },
  {
      "NBA_ID": 1630169,
      "FULL_NAME": "Tyrese Haliburton",
      "FNAME": "Tyrese",
      "LNAME": "Haliburton",
      "JERSEY_NUM": "0",
      "POS": "G",
      "TEAM": "IND"
  },
  {
      "NBA_ID": 1629788,
      "FULL_NAME": "Tyler Hall",
      "FNAME": "Tyler",
      "LNAME": "Hall",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1630181,
      "FULL_NAME": "R.J. Hampton",
      "FNAME": "R.J.",
      "LNAME": "Hampton",
      "JERSEY_NUM": "13",
      "POS": "G",
      "TEAM": "ORL"
  },
  {
      "NBA_ID": 203501,
      "FULL_NAME": "Tim Hardaway Jr.",
      "FNAME": "Tim",
      "LNAME": "Hardaway Jr.",
      "JERSEY_NUM": "11",
      "POS": "G-F",
      "TEAM": "DAL"
  },
  {
      "NBA_ID": 201935,
      "FULL_NAME": "James Harden",
      "FNAME": "James",
      "LNAME": "Harden",
      "JERSEY_NUM": "1",
      "POS": "G",
      "TEAM": "PHI"
  },
  {
      "NBA_ID": 203090,
      "FULL_NAME": "Maurice Harkless",
      "FNAME": "Maurice",
      "LNAME": "Harkless",
      "JERSEY_NUM": "8",
      "POS": "F-G",
      "TEAM": "SAC"
  },
  {
      "NBA_ID": 1629607,
      "FULL_NAME": "Jared Harper",
      "FNAME": "Jared",
      "LNAME": "Harper",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1626149,
      "FULL_NAME": "Montrezl Harrell",
      "FNAME": "Montrezl",
      "LNAME": "Harrell",
      "JERSEY_NUM": "6",
      "POS": "F-C",
      "TEAM": "CHA"
  },
  {
      "NBA_ID": 203914,
      "FULL_NAME": "Gary Harris",
      "FNAME": "Gary",
      "LNAME": "Harris",
      "JERSEY_NUM": "14",
      "POS": "G",
      "TEAM": "ORL"
  },
  {
      "NBA_ID": 203925,
      "FULL_NAME": "Joe Harris",
      "FNAME": "Joe",
      "LNAME": "Harris",
      "JERSEY_NUM": "12",
      "POS": "G-F",
      "TEAM": "BKN"
  },
  {
      "NBA_ID": 202699,
      "FULL_NAME": "Tobias Harris",
      "FNAME": "Tobias",
      "LNAME": "Harris",
      "JERSEY_NUM": "12",
      "POS": "F",
      "TEAM": "PHI"
  },
  {
      "NBA_ID": 1627885,
      "FULL_NAME": "Shaquille Harrison",
      "FNAME": "Shaquille",
      "LNAME": "Harrison",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1628404,
      "FULL_NAME": "Josh Hart",
      "FNAME": "Josh",
      "LNAME": "Hart",
      "JERSEY_NUM": "11",
      "POS": "G",
      "TEAM": "POR"
  },
  {
      "NBA_ID": 1628392,
      "FULL_NAME": "Isaiah Hartenstein",
      "FNAME": "Isaiah",
      "LNAME": "Hartenstein",
      "JERSEY_NUM": "55",
      "POS": "C-F",
      "TEAM": "LAC"
  },
  {
      "NBA_ID": 2617,
      "FULL_NAME": "Udonis Haslem",
      "FNAME": "Udonis",
      "LNAME": "Haslem",
      "JERSEY_NUM": "40",
      "POS": "F",
      "TEAM": "MIA"
  },
  {
      "NBA_ID": 1630573,
      "FULL_NAME": "Sam Hauser",
      "FNAME": "Sam",
      "LNAME": "Hauser",
      "JERSEY_NUM": "30",
      "POS": "F",
      "TEAM": "BOS"
  },
  {
      "NBA_ID": 1629637,
      "FULL_NAME": "Jaxson Hayes",
      "FNAME": "Jaxson",
      "LNAME": "Hayes",
      "JERSEY_NUM": "10",
      "POS": "C-F",
      "TEAM": "NOP"
  },
  {
      "NBA_ID": 1630165,
      "FULL_NAME": "Killian Hayes",
      "FNAME": "Killian",
      "LNAME": "Hayes",
      "JERSEY_NUM": "7",
      "POS": "G",
      "TEAM": "DET"
  },
  {
      "NBA_ID": 202330,
      "FULL_NAME": "Gordon Hayward",
      "FNAME": "Gordon",
      "LNAME": "Hayward",
      "JERSEY_NUM": "20",
      "POS": "F",
      "TEAM": "CHA"
  },
  {
      "NBA_ID": 1630565,
      "FULL_NAME": "Aaron Henry",
      "FNAME": "Aaron",
      "LNAME": "Henry",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 1627823,
      "FULL_NAME": "Juancho Hernangomez",
      "FNAME": "Juancho",
      "LNAME": "Hernangomez",
      "JERSEY_NUM": "41",
      "POS": "F",
      "TEAM": "UTA"
  },
  {
      "NBA_ID": 1626195,
      "FULL_NAME": "Willy Hernangomez",
      "FNAME": "Willy",
      "LNAME": "Hernangomez",
      "JERSEY_NUM": "9",
      "POS": "C-F",
      "TEAM": "NOP"
  },
  {
      "NBA_ID": 1629639,
      "FULL_NAME": "Tyler Herro",
      "FNAME": "Tyler",
      "LNAME": "Herro",
      "JERSEY_NUM": "14",
      "POS": "G",
      "TEAM": "MIA"
  },
  {
      "NBA_ID": 1627741,
      "FULL_NAME": "Buddy Hield",
      "FNAME": "Buddy",
      "LNAME": "Hield",
      "JERSEY_NUM": "24",
      "POS": "G",
      "TEAM": "IND"
  },
  {
      "NBA_ID": 1629312,
      "FULL_NAME": "Haywood Highsmith",
      "FNAME": "Haywood",
      "LNAME": "Highsmith",
      "JERSEY_NUM": "24",
      "POS": "F",
      "TEAM": "MIA"
  },
  {
      "NBA_ID": 201588,
      "FULL_NAME": "George Hill",
      "FNAME": "George",
      "LNAME": "Hill",
      "JERSEY_NUM": "3",
      "POS": "G",
      "TEAM": "MIL"
  },
  {
      "NBA_ID": 1630792,
      "FULL_NAME": "Malcolm Hill",
      "FNAME": "Malcolm",
      "LNAME": "Hill",
      "JERSEY_NUM": "14",
      "POS": "F",
      "TEAM": "CHI"
  },
  {
      "NBA_ID": 203524,
      "FULL_NAME": "Solomon Hill",
      "FNAME": "Solomon",
      "LNAME": "Hill",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 1630207,
      "FULL_NAME": "Nate Hinton",
      "FNAME": "Nate",
      "LNAME": "Hinton",
      "JERSEY_NUM": null,
      "POS": "G-F",
      "TEAM": null
  },
  {
      "NBA_ID": 1629658,
      "FULL_NAME": "Jaylen Hoard",
      "FNAME": "Jaylen",
      "LNAME": "Hoard",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 1628988,
      "FULL_NAME": "Aaron Holiday",
      "FNAME": "Aaron",
      "LNAME": "Holiday",
      "JERSEY_NUM": "4",
      "POS": "G",
      "TEAM": "PHX"
  },
  {
      "NBA_ID": 201950,
      "FULL_NAME": "Jrue Holiday",
      "FNAME": "Jrue",
      "LNAME": "Holiday",
      "JERSEY_NUM": "21",
      "POS": "G",
      "TEAM": "MIL"
  },
  {
      "NBA_ID": 203200,
      "FULL_NAME": "Justin Holiday",
      "FNAME": "Justin",
      "LNAME": "Holiday",
      "JERSEY_NUM": "9",
      "POS": "F-G",
      "TEAM": "SAC"
  },
  {
      "NBA_ID": 1626158,
      "FULL_NAME": "Richaun Holmes",
      "FNAME": "Richaun",
      "LNAME": "Holmes",
      "JERSEY_NUM": "22",
      "POS": "F",
      "TEAM": "SAC"
  },
  {
      "NBA_ID": 203918,
      "FULL_NAME": "Rodney Hood",
      "FNAME": "Rodney",
      "LNAME": "Hood",
      "JERSEY_NUM": "22",
      "POS": "G-F",
      "TEAM": "LAC"
  },
  {
      "NBA_ID": 203816,
      "FULL_NAME": "Scotty Hopson",
      "FNAME": "Scotty",
      "LNAME": "Hopson",
      "JERSEY_NUM": null,
      "POS": "G-F",
      "TEAM": null
  },
  {
      "NBA_ID": 201143,
      "FULL_NAME": "Al Horford",
      "FNAME": "Al",
      "LNAME": "Horford",
      "JERSEY_NUM": "42",
      "POS": "C-F",
      "TEAM": "BOS"
  },
  {
      "NBA_ID": 1629659,
      "FULL_NAME": "Talen Horton-Tucker",
      "FNAME": "Talen",
      "LNAME": "Horton-Tucker",
      "JERSEY_NUM": "5",
      "POS": "G",
      "TEAM": "LAL"
  },
  {
      "NBA_ID": 1627863,
      "FULL_NAME": "Danuel House Jr.",
      "FNAME": "Danuel",
      "LNAME": "House Jr.",
      "JERSEY_NUM": "25",
      "POS": "F-G",
      "TEAM": "UTA"
  },
  {
      "NBA_ID": 2730,
      "FULL_NAME": "Dwight Howard",
      "FNAME": "Dwight",
      "LNAME": "Howard",
      "JERSEY_NUM": "39",
      "POS": "C-F",
      "TEAM": "LAL"
  },
  {
      "NBA_ID": 1630210,
      "FULL_NAME": "Markus Howard",
      "FNAME": "Markus",
      "LNAME": "Howard",
      "JERSEY_NUM": "00",
      "POS": "G",
      "TEAM": "DEN"
  },
  {
      "NBA_ID": 1628989,
      "FULL_NAME": "Kevin Huerter",
      "FNAME": "Kevin",
      "LNAME": "Huerter",
      "JERSEY_NUM": "3",
      "POS": "G-F",
      "TEAM": "ATL"
  },
  {
      "NBA_ID": 1630643,
      "FULL_NAME": "Jay Huff",
      "FNAME": "Jay",
      "LNAME": "Huff",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 1630190,
      "FULL_NAME": "Elijah Hughes",
      "FNAME": "Elijah",
      "LNAME": "Hughes",
      "JERSEY_NUM": "19",
      "POS": "G",
      "TEAM": "POR"
  },
  {
      "NBA_ID": 1629631,
      "FULL_NAME": "De'Andre Hunter",
      "FNAME": "De'Andre",
      "LNAME": "Hunter",
      "JERSEY_NUM": "12",
      "POS": "F-G",
      "TEAM": "ATL"
  },
  {
      "NBA_ID": 1628990,
      "FULL_NAME": "Chandler Hutchison",
      "FNAME": "Chandler",
      "LNAME": "Hutchison",
      "JERSEY_NUM": null,
      "POS": "F-G",
      "TEAM": null
  },
  {
      "NBA_ID": 1630538,
      "FULL_NAME": "Bones Hyland",
      "FNAME": "Bones",
      "LNAME": "Hyland",
      "JERSEY_NUM": "3",
      "POS": "G",
      "TEAM": "DEN"
  },
  {
      "NBA_ID": 201586,
      "FULL_NAME": "Serge Ibaka",
      "FNAME": "Serge",
      "LNAME": "Ibaka",
      "JERSEY_NUM": "25",
      "POS": "F",
      "TEAM": "MIL"
  },
  {
      "NBA_ID": 2738,
      "FULL_NAME": "Andre Iguodala",
      "FNAME": "Andre",
      "LNAME": "Iguodala",
      "JERSEY_NUM": "9",
      "POS": "G-F",
      "TEAM": "GSW"
  },
  {
      "NBA_ID": 204060,
      "FULL_NAME": "Joe Ingles",
      "FNAME": "Joe",
      "LNAME": "Ingles",
      "JERSEY_NUM": "00",
      "POS": "F-G",
      "TEAM": "POR"
  },
  {
      "NBA_ID": 1627742,
      "FULL_NAME": "Brandon Ingram",
      "FNAME": "Brandon",
      "LNAME": "Ingram",
      "JERSEY_NUM": "14",
      "POS": "F",
      "TEAM": "NOP"
  },
  {
      "NBA_ID": 202681,
      "FULL_NAME": "Kyrie Irving",
      "FNAME": "Kyrie",
      "LNAME": "Irving",
      "JERSEY_NUM": "11",
      "POS": "G",
      "TEAM": "BKN"
  },
  {
      "NBA_ID": 1628371,
      "FULL_NAME": "Jonathan Isaac",
      "FNAME": "Jonathan",
      "LNAME": "Isaac",
      "JERSEY_NUM": "1",
      "POS": "F",
      "TEAM": "ORL"
  },
  {
      "NBA_ID": 1628411,
      "FULL_NAME": "Wes Iwundu",
      "FNAME": "Wes",
      "LNAME": "Iwundu",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 1628402,
      "FULL_NAME": "Frank Jackson",
      "FNAME": "Frank",
      "LNAME": "Jackson",
      "JERSEY_NUM": "5",
      "POS": "G",
      "TEAM": "DET"
  },
  {
      "NBA_ID": 1630543,
      "FULL_NAME": "Isaiah Jackson",
      "FNAME": "Isaiah",
      "LNAME": "Jackson",
      "JERSEY_NUM": "23",
      "POS": "F",
      "TEAM": "IND"
  },
  {
      "NBA_ID": 1628367,
      "FULL_NAME": "Josh Jackson",
      "FNAME": "Josh",
      "LNAME": "Jackson",
      "JERSEY_NUM": "55",
      "POS": "G-F",
      "TEAM": "SAC"
  },
  {
      "NBA_ID": 1628382,
      "FULL_NAME": "Justin Jackson",
      "FNAME": "Justin",
      "LNAME": "Jackson",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 202704,
      "FULL_NAME": "Reggie Jackson",
      "FNAME": "Reggie",
      "LNAME": "Jackson",
      "JERSEY_NUM": "1",
      "POS": "G",
      "TEAM": "LAC"
  },
  {
      "NBA_ID": 1628991,
      "FULL_NAME": "Jaren Jackson Jr.",
      "FNAME": "Jaren",
      "LNAME": "Jackson Jr.",
      "JERSEY_NUM": "13",
      "POS": "F-C",
      "TEAM": "MEM"
  },
  {
      "NBA_ID": 2544,
      "FULL_NAME": "LeBron James",
      "FNAME": "LeBron",
      "LNAME": "James",
      "JERSEY_NUM": "6",
      "POS": "F",
      "TEAM": "LAL"
  },
  {
      "NBA_ID": 1630610,
      "FULL_NAME": "DeJon Jarreau",
      "FNAME": "DeJon",
      "LNAME": "Jarreau",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1629610,
      "FULL_NAME": "DaQuan Jeffries",
      "FNAME": "DaQuan",
      "LNAME": "Jeffries",
      "JERSEY_NUM": null,
      "POS": "G-F",
      "TEAM": null
  },
  {
      "NBA_ID": 1629660,
      "FULL_NAME": "Ty Jerome",
      "FNAME": "Ty",
      "LNAME": "Jerome",
      "JERSEY_NUM": "16",
      "POS": "G-F",
      "TEAM": "OKC"
  },
  {
      "NBA_ID": 1630198,
      "FULL_NAME": "Isaiah Joe",
      "FNAME": "Isaiah",
      "LNAME": "Joe",
      "JERSEY_NUM": "7",
      "POS": "G",
      "TEAM": "PHI"
  },
  {
      "NBA_ID": 1628993,
      "FULL_NAME": "Alize Johnson",
      "FNAME": "Alize",
      "LNAME": "Johnson",
      "JERSEY_NUM": "22",
      "POS": "F",
      "TEAM": "NOP"
  },
  {
      "NBA_ID": 1629168,
      "FULL_NAME": "BJ Johnson",
      "FNAME": "BJ",
      "LNAME": "Johnson",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 1629661,
      "FULL_NAME": "Cameron Johnson",
      "FNAME": "Cameron",
      "LNAME": "Johnson",
      "JERSEY_NUM": "23",
      "POS": "F",
      "TEAM": "PHX"
  },
  {
      "NBA_ID": 1630525,
      "FULL_NAME": "David Johnson",
      "FNAME": "David",
      "LNAME": "Johnson",
      "JERSEY_NUM": "13",
      "POS": "G",
      "TEAM": "TOR"
  },
  {
      "NBA_ID": 1630552,
      "FULL_NAME": "Jalen Johnson",
      "FNAME": "Jalen",
      "LNAME": "Johnson",
      "JERSEY_NUM": "1",
      "POS": "F",
      "TEAM": "ATL"
  },
  {
      "NBA_ID": 201949,
      "FULL_NAME": "James Johnson",
      "FNAME": "James",
      "LNAME": "Johnson",
      "JERSEY_NUM": "16",
      "POS": "F",
      "TEAM": "BKN"
  },
  {
      "NBA_ID": 2207,
      "FULL_NAME": "Joe Johnson",
      "FNAME": "Joe",
      "LNAME": "Johnson",
      "JERSEY_NUM": null,
      "POS": "G-F",
      "TEAM": null
  },
  {
      "NBA_ID": 1629640,
      "FULL_NAME": "Keldon Johnson",
      "FNAME": "Keldon",
      "LNAME": "Johnson",
      "JERSEY_NUM": "3",
      "POS": "F-G",
      "TEAM": "SAS"
  },
  {
      "NBA_ID": 1630553,
      "FULL_NAME": "Keon Johnson",
      "FNAME": "Keon",
      "LNAME": "Johnson",
      "JERSEY_NUM": "6",
      "POS": "G",
      "TEAM": "POR"
  },
  {
      "NBA_ID": 1626169,
      "FULL_NAME": "Stanley Johnson",
      "FNAME": "Stanley",
      "LNAME": "Johnson",
      "JERSEY_NUM": "14",
      "POS": "F-G",
      "TEAM": "LAL"
  },
  {
      "NBA_ID": 204020,
      "FULL_NAME": "Tyler Johnson",
      "FNAME": "Tyler",
      "LNAME": "Johnson",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 203999,
      "FULL_NAME": "Nikola Jokic",
      "FNAME": "Nikola",
      "LNAME": "Jokic",
      "JERSEY_NUM": "15",
      "POS": "C",
      "TEAM": "DEN"
  },
  {
      "NBA_ID": 1630637,
      "FULL_NAME": "Carlik Jones",
      "FNAME": "Carlik",
      "LNAME": "Jones",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1627745,
      "FULL_NAME": "Damian Jones",
      "FNAME": "Damian",
      "LNAME": "Jones",
      "JERSEY_NUM": "30",
      "POS": "C",
      "TEAM": "SAC"
  },
  {
      "NBA_ID": 1630529,
      "FULL_NAME": "Herbert Jones",
      "FNAME": "Herbert",
      "LNAME": "Jones",
      "JERSEY_NUM": "5",
      "POS": "F",
      "TEAM": "NOP"
  },
  {
      "NBA_ID": 1629203,
      "FULL_NAME": "Jemerrio Jones",
      "FNAME": "Jemerrio",
      "LNAME": "Jones",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 1630539,
      "FULL_NAME": "Kai Jones",
      "FNAME": "Kai",
      "LNAME": "Jones",
      "JERSEY_NUM": "23",
      "POS": "C-F",
      "TEAM": "CHA"
  },
  {
      "NBA_ID": 1630222,
      "FULL_NAME": "Mason Jones",
      "FNAME": "Mason",
      "LNAME": "Jones",
      "JERSEY_NUM": "40",
      "POS": "G",
      "TEAM": "LAL"
  },
  {
      "NBA_ID": 1630200,
      "FULL_NAME": "Tre Jones",
      "FNAME": "Tre",
      "LNAME": "Jones",
      "JERSEY_NUM": "33",
      "POS": "G",
      "TEAM": "SAS"
  },
  {
      "NBA_ID": 1626145,
      "FULL_NAME": "Tyus Jones",
      "FNAME": "Tyus",
      "LNAME": "Jones",
      "JERSEY_NUM": "21",
      "POS": "G",
      "TEAM": "MEM"
  },
  {
      "NBA_ID": 1627884,
      "FULL_NAME": "Derrick Jones Jr.",
      "FNAME": "Derrick",
      "LNAME": "Jones Jr.",
      "JERSEY_NUM": "5",
      "POS": "F",
      "TEAM": "CHI"
  },
  {
      "NBA_ID": 201599,
      "FULL_NAME": "DeAndre Jordan",
      "FNAME": "DeAndre",
      "LNAME": "Jordan",
      "JERSEY_NUM": "9",
      "POS": "C",
      "TEAM": "PHI"
  },
  {
      "NBA_ID": 202709,
      "FULL_NAME": "Cory Joseph",
      "FNAME": "Cory",
      "LNAME": "Joseph",
      "JERSEY_NUM": "18",
      "POS": "G",
      "TEAM": "DET"
  },
  {
      "NBA_ID": 1630686,
      "FULL_NAME": "Georgios Kalaitzakis",
      "FNAME": "Georgios",
      "LNAME": "Kalaitzakis",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 1626163,
      "FULL_NAME": "Frank Kaminsky",
      "FNAME": "Frank",
      "LNAME": "Kaminsky",
      "JERSEY_NUM": "8",
      "POS": "F-C",
      "TEAM": "PHX"
  },
  {
      "NBA_ID": 1628379,
      "FULL_NAME": "Luke Kennard",
      "FNAME": "Luke",
      "LNAME": "Kennard",
      "JERSEY_NUM": "5",
      "POS": "G",
      "TEAM": "LAC"
  },
  {
      "NBA_ID": 1630296,
      "FULL_NAME": "Braxton Key",
      "FNAME": "Braxton",
      "LNAME": "Key",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 1628994,
      "FULL_NAME": "George King",
      "FNAME": "George",
      "LNAME": "King",
      "JERSEY_NUM": null,
      "POS": "F-G",
      "TEAM": null
  },
  {
      "NBA_ID": 1629663,
      "FULL_NAME": "Louis King",
      "FNAME": "Louis",
      "LNAME": "King",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 1630557,
      "FULL_NAME": "Corey Kispert",
      "FNAME": "Corey",
      "LNAME": "Kispert",
      "JERSEY_NUM": "24",
      "POS": "F",
      "TEAM": "WAS"
  },
  {
      "NBA_ID": 1628467,
      "FULL_NAME": "Maxi Kleber",
      "FNAME": "Maxi",
      "LNAME": "Kleber",
      "JERSEY_NUM": "42",
      "POS": "F",
      "TEAM": "DAL"
  },
  {
      "NBA_ID": 202688,
      "FULL_NAME": "Brandon Knight",
      "FNAME": "Brandon",
      "LNAME": "Knight",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1630233,
      "FULL_NAME": "Nathan Knight",
      "FNAME": "Nathan",
      "LNAME": "Knight",
      "JERSEY_NUM": "13",
      "POS": "F-C",
      "TEAM": "MIN"
  },
  {
      "NBA_ID": 1628995,
      "FULL_NAME": "Kevin Knox II",
      "FNAME": "Kevin",
      "LNAME": "Knox II",
      "JERSEY_NUM": "5",
      "POS": "F",
      "TEAM": "ATL"
  },
  {
      "NBA_ID": 1629723,
      "FULL_NAME": "John Konchar",
      "FNAME": "John",
      "LNAME": "Konchar",
      "JERSEY_NUM": "46",
      "POS": "G",
      "TEAM": "MEM"
  },
  {
      "NBA_ID": 1627788,
      "FULL_NAME": "Furkan Korkmaz",
      "FNAME": "Furkan",
      "LNAME": "Korkmaz",
      "JERSEY_NUM": "30",
      "POS": "G-F",
      "TEAM": "PHI"
  },
  {
      "NBA_ID": 1628436,
      "FULL_NAME": "Luke Kornet",
      "FNAME": "Luke",
      "LNAME": "Kornet",
      "JERSEY_NUM": "40",
      "POS": "C-F",
      "TEAM": "BOS"
  },
  {
      "NBA_ID": 1630249,
      "FULL_NAME": "Vit Krejci",
      "FNAME": "Vit",
      "LNAME": "Krejci",
      "JERSEY_NUM": "27",
      "POS": "G",
      "TEAM": "OKC"
  },
  {
      "NBA_ID": 1629083,
      "FULL_NAME": "Arnoldas Kulboka",
      "FNAME": "Arnoldas",
      "LNAME": "Kulboka",
      "JERSEY_NUM": "98",
      "POS": "F",
      "TEAM": "CHA"
  },
  {
      "NBA_ID": 1630228,
      "FULL_NAME": "Jonathan Kuminga",
      "FNAME": "Jonathan",
      "LNAME": "Kuminga",
      "JERSEY_NUM": "00",
      "POS": "F",
      "TEAM": "GSW"
  },
  {
      "NBA_ID": 1628398,
      "FULL_NAME": "Kyle Kuzma",
      "FNAME": "Kyle",
      "LNAME": "Kuzma",
      "JERSEY_NUM": "33",
      "POS": "F",
      "TEAM": "WAS"
  },
  {
      "NBA_ID": 203897,
      "FULL_NAME": "Zach LaVine",
      "FNAME": "Zach",
      "LNAME": "LaVine",
      "JERSEY_NUM": "8",
      "POS": "G-F",
      "TEAM": "CHI"
  },
  {
      "NBA_ID": 1630237,
      "FULL_NAME": "Anthony Lamb",
      "FNAME": "Anthony",
      "LNAME": "Lamb",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 203087,
      "FULL_NAME": "Jeremy Lamb",
      "FNAME": "Jeremy",
      "LNAME": "Lamb",
      "JERSEY_NUM": "26",
      "POS": "G-F",
      "TEAM": "SAC"
  },
  {
      "NBA_ID": 1629111,
      "FULL_NAME": "Jock Landale",
      "FNAME": "Jock",
      "LNAME": "Landale",
      "JERSEY_NUM": "34",
      "POS": "C",
      "TEAM": "SAS"
  },
  {
      "NBA_ID": 1629641,
      "FULL_NAME": "Romeo Langford",
      "FNAME": "Romeo",
      "LNAME": "Langford",
      "JERSEY_NUM": "35",
      "POS": "G-F",
      "TEAM": "SAS"
  },
  {
      "NBA_ID": 1627774,
      "FULL_NAME": "Jake Layman",
      "FNAME": "Jake",
      "LNAME": "Layman",
      "JERSEY_NUM": "10",
      "POS": "F",
      "TEAM": "MIN"
  },
  {
      "NBA_ID": 1627747,
      "FULL_NAME": "Caris LeVert",
      "FNAME": "Caris",
      "LNAME": "LeVert",
      "JERSEY_NUM": "3",
      "POS": "G",
      "TEAM": "CLE"
  },
  {
      "NBA_ID": 1627814,
      "FULL_NAME": "Damion Lee",
      "FNAME": "Damion",
      "LNAME": "Lee",
      "JERSEY_NUM": "1",
      "POS": "G-F",
      "TEAM": "GSW"
  },
  {
      "NBA_ID": 1630240,
      "FULL_NAME": "Saben Lee",
      "FNAME": "Saben",
      "LNAME": "Lee",
      "JERSEY_NUM": "38",
      "POS": "G",
      "TEAM": "DET"
  },
  {
      "NBA_ID": 203458,
      "FULL_NAME": "Alex Len",
      "FNAME": "Alex",
      "LNAME": "Len",
      "JERSEY_NUM": "25",
      "POS": "C",
      "TEAM": "SAC"
  },
  {
      "NBA_ID": 202695,
      "FULL_NAME": "Kawhi Leonard",
      "FNAME": "Kawhi",
      "LNAME": "Leonard",
      "JERSEY_NUM": "2",
      "POS": "F",
      "TEAM": "LAC"
  },
  {
      "NBA_ID": 1630575,
      "FULL_NAME": "Scottie Lewis",
      "FNAME": "Scottie",
      "LNAME": "Lewis",
      "JERSEY_NUM": "16",
      "POS": "G",
      "TEAM": "CHA"
  },
  {
      "NBA_ID": 1630184,
      "FULL_NAME": "Kira Lewis Jr.",
      "FNAME": "Kira",
      "LNAME": "Lewis Jr.",
      "JERSEY_NUM": "13",
      "POS": "G",
      "TEAM": "NOP"
  },
  {
      "NBA_ID": 203081,
      "FULL_NAME": "Damian Lillard",
      "FNAME": "Damian",
      "LNAME": "Lillard",
      "JERSEY_NUM": "0",
      "POS": "G",
      "TEAM": "POR"
  },
  {
      "NBA_ID": 1629642,
      "FULL_NAME": "Nassir Little",
      "FNAME": "Nassir",
      "LNAME": "Little",
      "JERSEY_NUM": "9",
      "POS": "F-G",
      "TEAM": "POR"
  },
  {
      "NBA_ID": 1630587,
      "FULL_NAME": "Isaiah Livers",
      "FNAME": "Isaiah",
      "LNAME": "Livers",
      "JERSEY_NUM": "12",
      "POS": "F",
      "TEAM": "DET"
  },
  {
      "NBA_ID": 1626172,
      "FULL_NAME": "Kevon Looney",
      "FNAME": "Kevon",
      "LNAME": "Looney",
      "JERSEY_NUM": "5",
      "POS": "F",
      "TEAM": "GSW"
  },
  {
      "NBA_ID": 201572,
      "FULL_NAME": "Brook Lopez",
      "FNAME": "Brook",
      "LNAME": "Lopez",
      "JERSEY_NUM": "11",
      "POS": "C",
      "TEAM": "MIL"
  },
  {
      "NBA_ID": 201577,
      "FULL_NAME": "Robin Lopez",
      "FNAME": "Robin",
      "LNAME": "Lopez",
      "JERSEY_NUM": "33",
      "POS": "C",
      "TEAM": "ORL"
  },
  {
      "NBA_ID": 1629712,
      "FULL_NAME": "Didi Louzada",
      "FNAME": "Didi",
      "LNAME": "Louzada",
      "JERSEY_NUM": "35",
      "POS": "G",
      "TEAM": "POR"
  },
  {
      "NBA_ID": 201567,
      "FULL_NAME": "Kevin Love",
      "FNAME": "Kevin",
      "LNAME": "Love",
      "JERSEY_NUM": "0",
      "POS": "F-C",
      "TEAM": "CLE"
  },
  {
      "NBA_ID": 200768,
      "FULL_NAME": "Kyle Lowry",
      "FNAME": "Kyle",
      "LNAME": "Lowry",
      "JERSEY_NUM": "7",
      "POS": "G",
      "TEAM": "MIA"
  },
  {
      "NBA_ID": 1627789,
      "FULL_NAME": "Timothe Luwawu-Cabarrot",
      "FNAME": "Timothe",
      "LNAME": "Luwawu-Cabarrot",
      "JERSEY_NUM": "7",
      "POS": "G-F",
      "TEAM": "ATL"
  },
  {
      "NBA_ID": 1626168,
      "FULL_NAME": "Trey Lyles",
      "FNAME": "Trey",
      "LNAME": "Lyles",
      "JERSEY_NUM": "41",
      "POS": "F",
      "TEAM": "SAC"
  },
  {
      "NBA_ID": 1630177,
      "FULL_NAME": "Theo Maledon",
      "FNAME": "Theo",
      "LNAME": "Maledon",
      "JERSEY_NUM": "11",
      "POS": "G",
      "TEAM": "OKC"
  },
  {
      "NBA_ID": 1630572,
      "FULL_NAME": "Sandro Mamukelashvili",
      "FNAME": "Sandro",
      "LNAME": "Mamukelashvili",
      "JERSEY_NUM": "54",
      "POS": "F-C",
      "TEAM": "MIL"
  },
  {
      "NBA_ID": 1629611,
      "FULL_NAME": "Terance Mann",
      "FNAME": "Terance",
      "LNAME": "Mann",
      "JERSEY_NUM": "14",
      "POS": "G-F",
      "TEAM": "LAC"
  },
  {
      "NBA_ID": 1630544,
      "FULL_NAME": "Tre Mann",
      "FNAME": "Tre",
      "LNAME": "Mann",
      "JERSEY_NUM": "23",
      "POS": "G",
      "TEAM": "OKC"
  },
  {
      "NBA_ID": 1626246,
      "FULL_NAME": "Boban Marjanovic",
      "FNAME": "Boban",
      "LNAME": "Marjanovic",
      "JERSEY_NUM": "51",
      "POS": "C",
      "TEAM": "DAL"
  },
  {
      "NBA_ID": 1628374,
      "FULL_NAME": "Lauri Markkanen",
      "FNAME": "Lauri",
      "LNAME": "Markkanen",
      "JERSEY_NUM": "24",
      "POS": "F-C",
      "TEAM": "CLE"
  },
  {
      "NBA_ID": 1630230,
      "FULL_NAME": "Naji Marshall",
      "FNAME": "Naji",
      "LNAME": "Marshall",
      "JERSEY_NUM": "8",
      "POS": "F",
      "TEAM": "NOP"
  },
  {
      "NBA_ID": 1628997,
      "FULL_NAME": "Caleb Martin",
      "FNAME": "Caleb",
      "LNAME": "Martin",
      "JERSEY_NUM": "16",
      "POS": "F",
      "TEAM": "MIA"
  },
  {
      "NBA_ID": 1628998,
      "FULL_NAME": "Cody Martin",
      "FNAME": "Cody",
      "LNAME": "Martin",
      "JERSEY_NUM": "11",
      "POS": "F",
      "TEAM": "CHA"
  },
  {
      "NBA_ID": 1629103,
      "FULL_NAME": "Kelan Martin",
      "FNAME": "Kelan",
      "LNAME": "Martin",
      "JERSEY_NUM": "21",
      "POS": "F",
      "TEAM": "BOS"
  },
  {
      "NBA_ID": 1630231,
      "FULL_NAME": "Kenyon Martin Jr.",
      "FNAME": "Kenyon",
      "LNAME": "Martin Jr.",
      "JERSEY_NUM": "6",
      "POS": "F",
      "TEAM": "HOU"
  },
  {
      "NBA_ID": 1629726,
      "FULL_NAME": "Garrison Mathews",
      "FNAME": "Garrison",
      "LNAME": "Mathews",
      "JERSEY_NUM": "25",
      "POS": "G",
      "TEAM": "HOU"
  },
  {
      "NBA_ID": 1629751,
      "FULL_NAME": "Dakota Mathias",
      "FNAME": "Dakota",
      "LNAME": "Mathias",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 202083,
      "FULL_NAME": "Wesley Matthews",
      "FNAME": "Wesley",
      "LNAME": "Matthews",
      "JERSEY_NUM": "23",
      "POS": "G",
      "TEAM": "MIL"
  },
  {
      "NBA_ID": 1630178,
      "FULL_NAME": "Tyrese Maxey",
      "FNAME": "Tyrese",
      "LNAME": "Maxey",
      "JERSEY_NUM": "0",
      "POS": "G",
      "TEAM": "PHI"
  },
  {
      "NBA_ID": 1630219,
      "FULL_NAME": "Skylar Mays",
      "FNAME": "Skylar",
      "LNAME": "Mays",
      "JERSEY_NUM": "4",
      "POS": "G",
      "TEAM": "ATL"
  },
  {
      "NBA_ID": 1630540,
      "FULL_NAME": "Miles McBride",
      "FNAME": "Miles",
      "LNAME": "McBride",
      "JERSEY_NUM": "2",
      "POS": "G",
      "TEAM": "NYK"
  },
  {
      "NBA_ID": 1630644,
      "FULL_NAME": "Mac McClung",
      "FNAME": "Mac",
      "LNAME": "McClung",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 203468,
      "FULL_NAME": "CJ McCollum",
      "FNAME": "CJ",
      "LNAME": "McCollum",
      "JERSEY_NUM": "3",
      "POS": "G",
      "TEAM": "NOP"
  },
  {
      "NBA_ID": 204456,
      "FULL_NAME": "T.J. McConnell",
      "FNAME": "T.J.",
      "LNAME": "McConnell",
      "JERSEY_NUM": "9",
      "POS": "G",
      "TEAM": "IND"
  },
  {
      "NBA_ID": 1630183,
      "FULL_NAME": "Jaden McDaniels",
      "FNAME": "Jaden",
      "LNAME": "McDaniels",
      "JERSEY_NUM": "3",
      "POS": "F",
      "TEAM": "MIN"
  },
  {
      "NBA_ID": 1629667,
      "FULL_NAME": "Jalen McDaniels",
      "FNAME": "Jalen",
      "LNAME": "McDaniels",
      "JERSEY_NUM": "6",
      "POS": "F-C",
      "TEAM": "CHA"
  },
  {
      "NBA_ID": 203926,
      "FULL_NAME": "Doug McDermott",
      "FNAME": "Doug",
      "LNAME": "McDermott",
      "JERSEY_NUM": "17",
      "POS": "F",
      "TEAM": "SAS"
  },
  {
      "NBA_ID": 201580,
      "FULL_NAME": "JaVale McGee",
      "FNAME": "JaVale",
      "LNAME": "McGee",
      "JERSEY_NUM": "00",
      "POS": "C-F",
      "TEAM": "PHX"
  },
  {
      "NBA_ID": 1630787,
      "FULL_NAME": "Cameron McGriff",
      "FNAME": "Cameron",
      "LNAME": "McGriff",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 203585,
      "FULL_NAME": "Rodney McGruder",
      "FNAME": "Rodney",
      "LNAME": "McGruder",
      "JERSEY_NUM": "17",
      "POS": "G",
      "TEAM": "DET"
  },
  {
      "NBA_ID": 1628035,
      "FULL_NAME": "Alfonzo McKinnie",
      "FNAME": "Alfonzo",
      "LNAME": "McKinnie",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 1630605,
      "FULL_NAME": "JaQuori McLaughlin",
      "FNAME": "JaQuori",
      "LNAME": "McLaughlin",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1629162,
      "FULL_NAME": "Jordan McLaughlin",
      "FNAME": "Jordan",
      "LNAME": "McLaughlin",
      "JERSEY_NUM": "6",
      "POS": "G",
      "TEAM": "MIN"
  },
  {
      "NBA_ID": 203463,
      "FULL_NAME": "Ben McLemore",
      "FNAME": "Ben",
      "LNAME": "McLemore",
      "JERSEY_NUM": "23",
      "POS": "G",
      "TEAM": "POR"
  },
  {
      "NBA_ID": 1629001,
      "FULL_NAME": "De'Anthony Melton",
      "FNAME": "De'Anthony",
      "LNAME": "Melton",
      "JERSEY_NUM": "0",
      "POS": "G",
      "TEAM": "MEM"
  },
  {
      "NBA_ID": 1630241,
      "FULL_NAME": "Sam Merrill",
      "FNAME": "Sam",
      "LNAME": "Merrill",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1629002,
      "FULL_NAME": "Chimezie Metu",
      "FNAME": "Chimezie",
      "LNAME": "Metu",
      "JERSEY_NUM": "7",
      "POS": "F-C",
      "TEAM": "SAC"
  },
  {
      "NBA_ID": 203114,
      "FULL_NAME": "Khris Middleton",
      "FNAME": "Khris",
      "LNAME": "Middleton",
      "JERSEY_NUM": "22",
      "POS": "F",
      "TEAM": "MIL"
  },
  {
      "NBA_ID": 101139,
      "FULL_NAME": "CJ Miles",
      "FNAME": "CJ",
      "LNAME": "Miles",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 201988,
      "FULL_NAME": "Patty Mills",
      "FNAME": "Patty",
      "LNAME": "Mills",
      "JERSEY_NUM": "8",
      "POS": "G",
      "TEAM": "BKN"
  },
  {
      "NBA_ID": 200794,
      "FULL_NAME": "Paul Millsap",
      "FNAME": "Paul",
      "LNAME": "Millsap",
      "JERSEY_NUM": "8",
      "POS": "F",
      "TEAM": "PHI"
  },
  {
      "NBA_ID": 1629003,
      "FULL_NAME": "Shake Milton",
      "FNAME": "Shake",
      "LNAME": "Milton",
      "JERSEY_NUM": "18",
      "POS": "G-F",
      "TEAM": "PHI"
  },
  {
      "NBA_ID": 1630558,
      "FULL_NAME": "Davion Mitchell",
      "FNAME": "Davion",
      "LNAME": "Mitchell",
      "JERSEY_NUM": "15",
      "POS": "G",
      "TEAM": "SAC"
  },
  {
      "NBA_ID": 1628378,
      "FULL_NAME": "Donovan Mitchell",
      "FNAME": "Donovan",
      "LNAME": "Mitchell",
      "JERSEY_NUM": "45",
      "POS": "G",
      "TEAM": "UTA"
  },
  {
      "NBA_ID": 1630596,
      "FULL_NAME": "Evan Mobley",
      "FNAME": "Evan",
      "LNAME": "Mobley",
      "JERSEY_NUM": "4",
      "POS": "C",
      "TEAM": "CLE"
  },
  {
      "NBA_ID": 1628370,
      "FULL_NAME": "Malik Monk",
      "FNAME": "Malik",
      "LNAME": "Monk",
      "JERSEY_NUM": "11",
      "POS": "G",
      "TEAM": "LAL"
  },
  {
      "NBA_ID": 202328,
      "FULL_NAME": "Greg Monroe",
      "FNAME": "Greg",
      "LNAME": "Monroe",
      "JERSEY_NUM": null,
      "POS": "F-C",
      "TEAM": null
  },
  {
      "NBA_ID": 1630541,
      "FULL_NAME": "Moses Moody",
      "FNAME": "Moses",
      "LNAME": "Moody",
      "JERSEY_NUM": "4",
      "POS": "G",
      "TEAM": "GSW"
  },
  {
      "NBA_ID": 1629875,
      "FULL_NAME": "Xavier Moon",
      "FNAME": "Xavier",
      "LNAME": "Moon",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1629760,
      "FULL_NAME": "Matt Mooney",
      "FNAME": "Matt",
      "LNAME": "Mooney",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1629630,
      "FULL_NAME": "Ja Morant",
      "FNAME": "Ja",
      "LNAME": "Morant",
      "JERSEY_NUM": "12",
      "POS": "G",
      "TEAM": "MEM"
  },
  {
      "NBA_ID": 1629752,
      "FULL_NAME": "Juwan Morgan",
      "FNAME": "Juwan",
      "LNAME": "Morgan",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 1628537,
      "FULL_NAME": "Jaylen Morris",
      "FNAME": "Jaylen",
      "LNAME": "Morris",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 202693,
      "FULL_NAME": "Markieff Morris",
      "FNAME": "Markieff",
      "LNAME": "Morris",
      "JERSEY_NUM": "8",
      "POS": "F",
      "TEAM": "MIA"
  },
  {
      "NBA_ID": 1628420,
      "FULL_NAME": "Monte Morris",
      "FNAME": "Monte",
      "LNAME": "Morris",
      "JERSEY_NUM": "11",
      "POS": "G",
      "TEAM": "DEN"
  },
  {
      "NBA_ID": 202694,
      "FULL_NAME": "Marcus Morris Sr.",
      "FNAME": "Marcus",
      "LNAME": "Morris Sr.",
      "JERSEY_NUM": "8",
      "POS": "F",
      "TEAM": "LAC"
  },
  {
      "NBA_ID": 1626144,
      "FULL_NAME": "Emmanuel Mudiay",
      "FNAME": "Emmanuel",
      "LNAME": "Mudiay",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1628539,
      "FULL_NAME": "Mychal Mulder",
      "FNAME": "Mychal",
      "LNAME": "Mulder",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1630278,
      "FULL_NAME": "Ade Murkey",
      "FNAME": "Ade",
      "LNAME": "Murkey",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1630530,
      "FULL_NAME": "Trey Murphy III",
      "FNAME": "Trey",
      "LNAME": "Murphy III",
      "JERSEY_NUM": "25",
      "POS": "F",
      "TEAM": "NOP"
  },
  {
      "NBA_ID": 1627749,
      "FULL_NAME": "Dejounte Murray",
      "FNAME": "Dejounte",
      "LNAME": "Murray",
      "JERSEY_NUM": "5",
      "POS": "G",
      "TEAM": "SAS"
  },
  {
      "NBA_ID": 1627750,
      "FULL_NAME": "Jamal Murray",
      "FNAME": "Jamal",
      "LNAME": "Murray",
      "JERSEY_NUM": "27",
      "POS": "G",
      "TEAM": "DEN"
  },
  {
      "NBA_ID": 203488,
      "FULL_NAME": "Mike Muscala",
      "FNAME": "Mike",
      "LNAME": "Muscala",
      "JERSEY_NUM": "33",
      "POS": "F-C",
      "TEAM": "OKC"
  },
  {
      "NBA_ID": 1629004,
      "FULL_NAME": "Svi Mykhailiuk",
      "FNAME": "Svi",
      "LNAME": "Mykhailiuk",
      "JERSEY_NUM": "14",
      "POS": "G-F",
      "TEAM": "TOR"
  },
  {
      "NBA_ID": 1627846,
      "FULL_NAME": "Abdel Nader",
      "FNAME": "Abdel",
      "LNAME": "Nader",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 1626204,
      "FULL_NAME": "Larry Nance Jr.",
      "FNAME": "Larry",
      "LNAME": "Nance Jr.",
      "JERSEY_NUM": "22",
      "POS": "F-C",
      "TEAM": "NOP"
  },
  {
      "NBA_ID": 1630612,
      "FULL_NAME": "RJ Nembhard Jr.",
      "FNAME": "RJ",
      "LNAME": "Nembhard Jr.",
      "JERSEY_NUM": "5",
      "POS": "G",
      "TEAM": "CLE"
  },
  {
      "NBA_ID": 1630174,
      "FULL_NAME": "Aaron Nesmith",
      "FNAME": "Aaron",
      "LNAME": "Nesmith",
      "JERSEY_NUM": "26",
      "POS": "G-F",
      "TEAM": "BOS"
  },
  {
      "NBA_ID": 203526,
      "FULL_NAME": "Raul Neto",
      "FNAME": "Raul",
      "LNAME": "Neto",
      "JERSEY_NUM": "19",
      "POS": "G",
      "TEAM": "WAS"
  },
  {
      "NBA_ID": 1629005,
      "FULL_NAME": "Malik Newman",
      "FNAME": "Malik",
      "LNAME": "Newman",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1627777,
      "FULL_NAME": "Georges Niang",
      "FNAME": "Georges",
      "LNAME": "Niang",
      "JERSEY_NUM": "20",
      "POS": "F",
      "TEAM": "PHI"
  },
  {
      "NBA_ID": 1630227,
      "FULL_NAME": "Daishen Nix",
      "FNAME": "Daishen",
      "LNAME": "Nix",
      "JERSEY_NUM": "15",
      "POS": "G",
      "TEAM": "HOU"
  },
  {
      "NBA_ID": 1630192,
      "FULL_NAME": "Zeke Nnaji",
      "FNAME": "Zeke",
      "LNAME": "Nnaji",
      "JERSEY_NUM": "22",
      "POS": "F-C",
      "TEAM": "DEN"
  },
  {
      "NBA_ID": 203457,
      "FULL_NAME": "Nerlens Noel",
      "FNAME": "Nerlens",
      "LNAME": "Noel",
      "JERSEY_NUM": "3",
      "POS": "C-F",
      "TEAM": "NYK"
  },
  {
      "NBA_ID": 1629669,
      "FULL_NAME": "Jaylen Nowell",
      "FNAME": "Jaylen",
      "LNAME": "Nowell",
      "JERSEY_NUM": "4",
      "POS": "G",
      "TEAM": "MIN"
  },
  {
      "NBA_ID": 1628373,
      "FULL_NAME": "Frank Ntilikina",
      "FNAME": "Frank",
      "LNAME": "Ntilikina",
      "JERSEY_NUM": "21",
      "POS": "G",
      "TEAM": "DAL"
  },
  {
      "NBA_ID": 1629134,
      "FULL_NAME": "Kendrick Nunn",
      "FNAME": "Kendrick",
      "LNAME": "Nunn",
      "JERSEY_NUM": "12",
      "POS": "G",
      "TEAM": "LAL"
  },
  {
      "NBA_ID": 203994,
      "FULL_NAME": "Jusuf Nurkic",
      "FNAME": "Jusuf",
      "LNAME": "Nurkic",
      "JERSEY_NUM": "27",
      "POS": "C",
      "TEAM": "POR"
  },
  {
      "NBA_ID": 1628021,
      "FULL_NAME": "David Nwaba",
      "FNAME": "David",
      "LNAME": "Nwaba",
      "JERSEY_NUM": "2",
      "POS": "G-F",
      "TEAM": "HOU"
  },
  {
      "NBA_ID": 1629670,
      "FULL_NAME": "Jordan Nwora",
      "FNAME": "Jordan",
      "LNAME": "Nwora",
      "JERSEY_NUM": "13",
      "POS": "F",
      "TEAM": "MIL"
  },
  {
      "NBA_ID": 1626220,
      "FULL_NAME": "Royce O'Neale",
      "FNAME": "Royce",
      "LNAME": "O'Neale",
      "JERSEY_NUM": "23",
      "POS": "F",
      "TEAM": "UTA"
  },
  {
      "NBA_ID": 1628400,
      "FULL_NAME": "Semi Ojeleye",
      "FNAME": "Semi",
      "LNAME": "Ojeleye",
      "JERSEY_NUM": "37",
      "POS": "F",
      "TEAM": "LAC"
  },
  {
      "NBA_ID": 1629643,
      "FULL_NAME": "Chuma Okeke",
      "FNAME": "Chuma",
      "LNAME": "Okeke",
      "JERSEY_NUM": "3",
      "POS": "F",
      "TEAM": "ORL"
  },
  {
      "NBA_ID": 1629006,
      "FULL_NAME": "Josh Okogie",
      "FNAME": "Josh",
      "LNAME": "Okogie",
      "JERSEY_NUM": "20",
      "POS": "G",
      "TEAM": "MIN"
  },
  {
      "NBA_ID": 1630168,
      "FULL_NAME": "Onyeka Okongwu",
      "FNAME": "Onyeka",
      "LNAME": "Okongwu",
      "JERSEY_NUM": "17",
      "POS": "F-C",
      "TEAM": "ATL"
  },
  {
      "NBA_ID": 1630171,
      "FULL_NAME": "Isaac Okoro",
      "FNAME": "Isaac",
      "LNAME": "Okoro",
      "JERSEY_NUM": "35",
      "POS": "F-G",
      "TEAM": "CLE"
  },
  {
      "NBA_ID": 1629644,
      "FULL_NAME": "KZ Okpala",
      "FNAME": "KZ",
      "LNAME": "Okpala",
      "JERSEY_NUM": null,
      "POS": "F-G",
      "TEAM": null
  },
  {
      "NBA_ID": 203506,
      "FULL_NAME": "Victor Oladipo",
      "FNAME": "Victor",
      "LNAME": "Oladipo",
      "JERSEY_NUM": "4",
      "POS": "G",
      "TEAM": "MIA"
  },
  {
      "NBA_ID": 1628419,
      "FULL_NAME": "Cameron Oliver",
      "FNAME": "Cameron",
      "LNAME": "Oliver",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 203482,
      "FULL_NAME": "Kelly Olynyk",
      "FNAME": "Kelly",
      "LNAME": "Olynyk",
      "JERSEY_NUM": "13",
      "POS": "F-C",
      "TEAM": "DET"
  },
  {
      "NBA_ID": 1630647,
      "FULL_NAME": "Eugene Omoruyi",
      "FNAME": "Eugene",
      "LNAME": "Omoruyi",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 1629671,
      "FULL_NAME": "Miye Oni",
      "FNAME": "Miye",
      "LNAME": "Oni",
      "JERSEY_NUM": null,
      "POS": "G-F",
      "TEAM": null
  },
  {
      "NBA_ID": 1626224,
      "FULL_NAME": "Cedi Osman",
      "FNAME": "Cedi",
      "LNAME": "Osman",
      "JERSEY_NUM": "16",
      "POS": "F",
      "TEAM": "CLE"
  },
  {
      "NBA_ID": 1630187,
      "FULL_NAME": "Daniel Oturu",
      "FNAME": "Daniel",
      "LNAME": "Oturu",
      "JERSEY_NUM": null,
      "POS": "C",
      "TEAM": null
  },
  {
      "NBA_ID": 1626162,
      "FULL_NAME": "Kelly Oubre Jr.",
      "FNAME": "Kelly",
      "LNAME": "Oubre Jr.",
      "JERSEY_NUM": "12",
      "POS": "F-G",
      "TEAM": "CHA"
  },
  {
      "NBA_ID": 1629873,
      "FULL_NAME": "Jaysean Paige",
      "FNAME": "Jaysean",
      "LNAME": "Paige",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1629309,
      "FULL_NAME": "Trayvon Palmer",
      "FNAME": "Trayvon",
      "LNAME": "Palmer",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1630698,
      "FULL_NAME": "Kevin Pangos",
      "FNAME": "Kevin",
      "LNAME": "Pangos",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 203953,
      "FULL_NAME": "Jabari Parker",
      "FNAME": "Jabari",
      "LNAME": "Parker",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 1629672,
      "FULL_NAME": "Eric Paschall",
      "FNAME": "Eric",
      "LNAME": "Paschall",
      "JERSEY_NUM": "0",
      "POS": "F",
      "TEAM": "UTA"
  },
  {
      "NBA_ID": 101108,
      "FULL_NAME": "Chris Paul",
      "FNAME": "Chris",
      "LNAME": "Paul",
      "JERSEY_NUM": "3",
      "POS": "G",
      "TEAM": "PHX"
  },
  {
      "NBA_ID": 1626166,
      "FULL_NAME": "Cameron Payne",
      "FNAME": "Cameron",
      "LNAME": "Payne",
      "JERSEY_NUM": "15",
      "POS": "G",
      "TEAM": "PHX"
  },
  {
      "NBA_ID": 203901,
      "FULL_NAME": "Elfrid Payton",
      "FNAME": "Elfrid",
      "LNAME": "Payton",
      "JERSEY_NUM": "2",
      "POS": "G",
      "TEAM": "PHX"
  },
  {
      "NBA_ID": 1627780,
      "FULL_NAME": "Gary Payton II",
      "FNAME": "Gary",
      "LNAME": "Payton II",
      "JERSEY_NUM": "0",
      "POS": "G",
      "TEAM": "GSW"
  },
  {
      "NBA_ID": 203658,
      "FULL_NAME": "Norvel Pelle",
      "FNAME": "Norvel",
      "LNAME": "Pelle",
      "JERSEY_NUM": null,
      "POS": "C",
      "TEAM": null
  },
  {
      "NBA_ID": 1629617,
      "FULL_NAME": "Reggie Perry",
      "FNAME": "Reggie",
      "LNAME": "Perry",
      "JERSEY_NUM": null,
      "POS": "F-C",
      "TEAM": null
  },
  {
      "NBA_ID": 1630691,
      "FULL_NAME": "Jamorko Pickett",
      "FNAME": "Jamorko",
      "LNAME": "Pickett",
      "JERSEY_NUM": "24",
      "POS": "F",
      "TEAM": "DET"
  },
  {
      "NBA_ID": 1629033,
      "FULL_NAME": "Theo Pinson",
      "FNAME": "Theo",
      "LNAME": "Pinson",
      "JERSEY_NUM": "21",
      "POS": "G-F",
      "TEAM": "DAL"
  },
  {
      "NBA_ID": 203486,
      "FULL_NAME": "Mason Plumlee",
      "FNAME": "Mason",
      "LNAME": "Plumlee",
      "JERSEY_NUM": "24",
      "POS": "F-C",
      "TEAM": "CHA"
  },
  {
      "NBA_ID": 1627751,
      "FULL_NAME": "Jakob Poeltl",
      "FNAME": "Jakob",
      "LNAME": "Poeltl",
      "JERSEY_NUM": "25",
      "POS": "C",
      "TEAM": "SAS"
  },
  {
      "NBA_ID": 1630197,
      "FULL_NAME": "Aleksej Pokusevski",
      "FNAME": "Aleksej",
      "LNAME": "Pokusevski",
      "JERSEY_NUM": "17",
      "POS": "F",
      "TEAM": "OKC"
  },
  {
      "NBA_ID": 1630582,
      "FULL_NAME": "Yves Pons",
      "FNAME": "Yves",
      "LNAME": "Pons",
      "JERSEY_NUM": "5",
      "POS": "F",
      "TEAM": "MEM"
  },
  {
      "NBA_ID": 1629673,
      "FULL_NAME": "Jordan Poole",
      "FNAME": "Jordan",
      "LNAME": "Poole",
      "JERSEY_NUM": "3",
      "POS": "G",
      "TEAM": "GSW"
  },
  {
      "NBA_ID": 1629645,
      "FULL_NAME": "Kevin Porter Jr.",
      "FNAME": "Kevin",
      "LNAME": "Porter Jr.",
      "JERSEY_NUM": "3",
      "POS": "G-F",
      "TEAM": "HOU"
  },
  {
      "NBA_ID": 1629008,
      "FULL_NAME": "Michael Porter Jr.",
      "FNAME": "Michael",
      "LNAME": "Porter Jr.",
      "JERSEY_NUM": "1",
      "POS": "F",
      "TEAM": "DEN"
  },
  {
      "NBA_ID": 203490,
      "FULL_NAME": "Otto Porter Jr.",
      "FNAME": "Otto",
      "LNAME": "Porter Jr.",
      "JERSEY_NUM": "32",
      "POS": "F",
      "TEAM": "GSW"
  },
  {
      "NBA_ID": 1626171,
      "FULL_NAME": "Bobby Portis",
      "FNAME": "Bobby",
      "LNAME": "Portis",
      "JERSEY_NUM": "9",
      "POS": "F",
      "TEAM": "MIL"
  },
  {
      "NBA_ID": 204001,
      "FULL_NAME": "Kristaps Porzingis",
      "FNAME": "Kristaps",
      "LNAME": "Porzingis",
      "JERSEY_NUM": "6",
      "POS": "F-C",
      "TEAM": "WAS"
  },
  {
      "NBA_ID": 1630695,
      "FULL_NAME": "Micah Potter",
      "FNAME": "Micah",
      "LNAME": "Potter",
      "JERSEY_NUM": null,
      "POS": "C",
      "TEAM": null
  },
  {
      "NBA_ID": 203939,
      "FULL_NAME": "Dwight Powell",
      "FNAME": "Dwight",
      "LNAME": "Powell",
      "JERSEY_NUM": "7",
      "POS": "F-C",
      "TEAM": "DAL"
  },
  {
      "NBA_ID": 1629619,
      "FULL_NAME": "Myles Powell",
      "FNAME": "Myles",
      "LNAME": "Powell",
      "JERSEY_NUM": "5",
      "POS": "G",
      "TEAM": "PHI"
  },
  {
      "NBA_ID": 1626181,
      "FULL_NAME": "Norman Powell",
      "FNAME": "Norman",
      "LNAME": "Powell",
      "JERSEY_NUM": "24",
      "POS": "G",
      "TEAM": "LAC"
  },
  {
      "NBA_ID": 1630554,
      "FULL_NAME": "Jason Preston",
      "FNAME": "Jason",
      "LNAME": "Preston",
      "JERSEY_NUM": "17",
      "POS": "G",
      "TEAM": "LAC"
  },
  {
      "NBA_ID": 1630563,
      "FULL_NAME": "Joshua Primo",
      "FNAME": "Joshua",
      "LNAME": "Primo",
      "JERSEY_NUM": "11",
      "POS": "G",
      "TEAM": "SAS"
  },
  {
      "NBA_ID": 1627752,
      "FULL_NAME": "Taurean Prince",
      "FNAME": "Taurean",
      "LNAME": "Prince",
      "JERSEY_NUM": "12",
      "POS": "F",
      "TEAM": "MIN"
  },
  {
      "NBA_ID": 1630202,
      "FULL_NAME": "Payton Pritchard",
      "FNAME": "Payton",
      "LNAME": "Pritchard",
      "JERSEY_NUM": "11",
      "POS": "G",
      "TEAM": "BOS"
  },
  {
      "NBA_ID": 1630243,
      "FULL_NAME": "Trevelin Queen",
      "FNAME": "Trevelin",
      "LNAME": "Queen",
      "JERSEY_NUM": "21",
      "POS": "G",
      "TEAM": "HOU"
  },
  {
      "NBA_ID": 1629674,
      "FULL_NAME": "Neemias Queta",
      "FNAME": "Neemias",
      "LNAME": "Queta",
      "JERSEY_NUM": "88",
      "POS": "C",
      "TEAM": "SAC"
  },
  {
      "NBA_ID": 1630193,
      "FULL_NAME": "Immanuel Quickley",
      "FNAME": "Immanuel",
      "LNAME": "Quickley",
      "JERSEY_NUM": "5",
      "POS": "G",
      "TEAM": "NYK"
  },
  {
      "NBA_ID": 1630186,
      "FULL_NAME": "Jahmi'us Ramsey",
      "FNAME": "Jahmi'us",
      "LNAME": "Ramsey",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 203944,
      "FULL_NAME": "Julius Randle",
      "FNAME": "Julius",
      "LNAME": "Randle",
      "JERSEY_NUM": "30",
      "POS": "F-C",
      "TEAM": "NYK"
  },
  {
      "NBA_ID": 1630559,
      "FULL_NAME": "Austin Reaves",
      "FNAME": "Austin",
      "LNAME": "Reaves",
      "JERSEY_NUM": "15",
      "POS": "G",
      "TEAM": "LAL"
  },
  {
      "NBA_ID": 1629629,
      "FULL_NAME": "Cam Reddish",
      "FNAME": "Cam",
      "LNAME": "Reddish",
      "JERSEY_NUM": "21",
      "POS": "F-G",
      "TEAM": "NYK"
  },
  {
      "NBA_ID": 1628432,
      "FULL_NAME": "Davon Reed",
      "FNAME": "Davon",
      "LNAME": "Reed",
      "JERSEY_NUM": "9",
      "POS": "G",
      "TEAM": "DEN"
  },
  {
      "NBA_ID": 1630194,
      "FULL_NAME": "Paul Reed",
      "FNAME": "Paul",
      "LNAME": "Reed",
      "JERSEY_NUM": "44",
      "POS": "F",
      "TEAM": "PHI"
  },
  {
      "NBA_ID": 1629675,
      "FULL_NAME": "Naz Reid",
      "FNAME": "Naz",
      "LNAME": "Reid",
      "JERSEY_NUM": "11",
      "POS": "C-F",
      "TEAM": "MIN"
  },
  {
      "NBA_ID": 1630208,
      "FULL_NAME": "Nick Richards",
      "FNAME": "Nick",
      "LNAME": "Richards",
      "JERSEY_NUM": "14",
      "POS": "C",
      "TEAM": "CHA"
  },
  {
      "NBA_ID": 1626196,
      "FULL_NAME": "Josh Richardson",
      "FNAME": "Josh",
      "LNAME": "Richardson",
      "JERSEY_NUM": "7",
      "POS": "G",
      "TEAM": "SAS"
  },
  {
      "NBA_ID": 203085,
      "FULL_NAME": "Austin Rivers",
      "FNAME": "Austin",
      "LNAME": "Rivers",
      "JERSEY_NUM": "25",
      "POS": "G",
      "TEAM": "DEN"
  },
  {
      "NBA_ID": 1629130,
      "FULL_NAME": "Duncan Robinson",
      "FNAME": "Duncan",
      "LNAME": "Robinson",
      "JERSEY_NUM": "55",
      "POS": "F",
      "TEAM": "MIA"
  },
  {
      "NBA_ID": 1629620,
      "FULL_NAME": "Justin Robinson",
      "FNAME": "Justin",
      "LNAME": "Robinson",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1629011,
      "FULL_NAME": "Mitchell Robinson",
      "FNAME": "Mitchell",
      "LNAME": "Robinson",
      "JERSEY_NUM": "23",
      "POS": "C-F",
      "TEAM": "NYK"
  },
  {
      "NBA_ID": 1630526,
      "FULL_NAME": "Jeremiah Robinson-Earl",
      "FNAME": "Jeremiah",
      "LNAME": "Robinson-Earl",
      "JERSEY_NUM": "50",
      "POS": "F",
      "TEAM": "OKC"
  },
  {
      "NBA_ID": 1629676,
      "FULL_NAME": "Isaiah Roby",
      "FNAME": "Isaiah",
      "LNAME": "Roby",
      "JERSEY_NUM": "22",
      "POS": "F",
      "TEAM": "OKC"
  },
  {
      "NBA_ID": 200765,
      "FULL_NAME": "Rajon Rondo",
      "FNAME": "Rajon",
      "LNAME": "Rondo",
      "JERSEY_NUM": "1",
      "POS": "G",
      "TEAM": "CLE"
  },
  {
      "NBA_ID": 201565,
      "FULL_NAME": "Derrick Rose",
      "FNAME": "Derrick",
      "LNAME": "Rose",
      "JERSEY_NUM": "4",
      "POS": "G",
      "TEAM": "NYK"
  },
  {
      "NBA_ID": 203082,
      "FULL_NAME": "Terrence Ross",
      "FNAME": "Terrence",
      "LNAME": "Ross",
      "JERSEY_NUM": "31",
      "POS": "G-F",
      "TEAM": "ORL"
  },
  {
      "NBA_ID": 1626179,
      "FULL_NAME": "Terry Rozier",
      "FNAME": "Terry",
      "LNAME": "Rozier",
      "JERSEY_NUM": "3",
      "POS": "G",
      "TEAM": "CHA"
  },
  {
      "NBA_ID": 201937,
      "FULL_NAME": "Ricky Rubio",
      "FNAME": "Ricky",
      "LNAME": "Rubio",
      "JERSEY_NUM": "99",
      "POS": "G",
      "TEAM": "IND"
  },
  {
      "NBA_ID": 1626156,
      "FULL_NAME": "D'Angelo Russell",
      "FNAME": "D'Angelo",
      "LNAME": "Russell",
      "JERSEY_NUM": "0",
      "POS": "G",
      "TEAM": "MIN"
  },
  {
      "NBA_ID": 1630346,
      "FULL_NAME": "Matt Ryan",
      "FNAME": "Matt",
      "LNAME": "Ryan",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": "BOS"
  },
  {
      "NBA_ID": 1627734,
      "FULL_NAME": "Domantas Sabonis",
      "FNAME": "Domantas",
      "LNAME": "Sabonis",
      "JERSEY_NUM": "10",
      "POS": "F-C",
      "TEAM": "SAC"
  },
  {
      "NBA_ID": 1629677,
      "FULL_NAME": "Luka Samanic",
      "FNAME": "Luka",
      "LNAME": "Samanic",
      "JERSEY_NUM": "91",
      "POS": "F",
      "TEAM": "NYK"
  },
  {
      "NBA_ID": 203967,
      "FULL_NAME": "Dario Saric",
      "FNAME": "Dario",
      "LNAME": "Saric",
      "JERSEY_NUM": "20",
      "POS": "F-C",
      "TEAM": "PHX"
  },
  {
      "NBA_ID": 1630846,
      "FULL_NAME": "Olivier Sarr",
      "FNAME": "Olivier",
      "LNAME": "Sarr",
      "JERSEY_NUM": "30",
      "POS": "C",
      "TEAM": "OKC"
  },
  {
      "NBA_ID": 203107,
      "FULL_NAME": "Tomas Satoransky",
      "FNAME": "Tomas",
      "LNAME": "Satoransky",
      "JERSEY_NUM": "31",
      "POS": "G",
      "TEAM": "WAS"
  },
  {
      "NBA_ID": 1630648,
      "FULL_NAME": "Jordan Schakel",
      "FNAME": "Jordan",
      "LNAME": "Schakel",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1629678,
      "FULL_NAME": "Admiral Schofield",
      "FNAME": "Admiral",
      "LNAME": "Schofield",
      "JERSEY_NUM": "25",
      "POS": "F",
      "TEAM": "ORL"
  },
  {
      "NBA_ID": 203471,
      "FULL_NAME": "Dennis Schroder",
      "FNAME": "Dennis",
      "LNAME": "Schroder",
      "JERSEY_NUM": "17",
      "POS": "G",
      "TEAM": "HOU"
  },
  {
      "NBA_ID": 1630286,
      "FULL_NAME": "Trevon Scott",
      "FNAME": "Trevon",
      "LNAME": "Scott",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 1630206,
      "FULL_NAME": "Jay Scrubb",
      "FNAME": "Jay",
      "LNAME": "Scrubb",
      "JERSEY_NUM": "0",
      "POS": "G",
      "TEAM": "LAC"
  },
  {
      "NBA_ID": 1627782,
      "FULL_NAME": "Wayne Selden",
      "FNAME": "Wayne",
      "LNAME": "Selden",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1630578,
      "FULL_NAME": "Alperen Sengun",
      "FNAME": "Alperen",
      "LNAME": "Sengun",
      "JERSEY_NUM": "28",
      "POS": "C",
      "TEAM": "HOU"
  },
  {
      "NBA_ID": 1629012,
      "FULL_NAME": "Collin Sexton",
      "FNAME": "Collin",
      "LNAME": "Sexton",
      "JERSEY_NUM": "2",
      "POS": "G",
      "TEAM": "CLE"
  },
  {
      "NBA_ID": 1629013,
      "FULL_NAME": "Landry Shamet",
      "FNAME": "Landry",
      "LNAME": "Shamet",
      "JERSEY_NUM": "14",
      "POS": "G",
      "TEAM": "PHX"
  },
  {
      "NBA_ID": 1630549,
      "FULL_NAME": "Day'Ron Sharpe",
      "FNAME": "Day'Ron",
      "LNAME": "Sharpe",
      "JERSEY_NUM": "20",
      "POS": "F",
      "TEAM": "BKN"
  },
  {
      "NBA_ID": 1627783,
      "FULL_NAME": "Pascal Siakam",
      "FNAME": "Pascal",
      "LNAME": "Siakam",
      "JERSEY_NUM": "43",
      "POS": "F",
      "TEAM": "TOR"
  },
  {
      "NBA_ID": 1629735,
      "FULL_NAME": "Chris Silva",
      "FNAME": "Chris",
      "LNAME": "Silva",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 1627732,
      "FULL_NAME": "Ben Simmons",
      "FNAME": "Ben",
      "LNAME": "Simmons",
      "JERSEY_NUM": "10",
      "POS": "G-F",
      "TEAM": "BKN"
  },
  {
      "NBA_ID": 1630250,
      "FULL_NAME": "Marko Simonovic",
      "FNAME": "Marko",
      "LNAME": "Simonovic",
      "JERSEY_NUM": "19",
      "POS": "C",
      "TEAM": "CHI"
  },
  {
      "NBA_ID": 1629014,
      "FULL_NAME": "Anfernee Simons",
      "FNAME": "Anfernee",
      "LNAME": "Simons",
      "JERSEY_NUM": "1",
      "POS": "G",
      "TEAM": "POR"
  },
  {
      "NBA_ID": 1630579,
      "FULL_NAME": "Jericho Sims",
      "FNAME": "Jericho",
      "LNAME": "Sims",
      "JERSEY_NUM": "45",
      "POS": "C",
      "TEAM": "NYK"
  },
  {
      "NBA_ID": 1629686,
      "FULL_NAME": "Deividas Sirvydis",
      "FNAME": "Deividas",
      "LNAME": "Sirvydis",
      "JERSEY_NUM": null,
      "POS": "F-G",
      "TEAM": null
  },
  {
      "NBA_ID": 1630606,
      "FULL_NAME": "Javonte Smart",
      "FNAME": "Javonte",
      "LNAME": "Smart",
      "JERSEY_NUM": "15",
      "POS": "G",
      "TEAM": "MIA"
  },
  {
      "NBA_ID": 203935,
      "FULL_NAME": "Marcus Smart",
      "FNAME": "Marcus",
      "LNAME": "Smart",
      "JERSEY_NUM": "36",
      "POS": "G",
      "TEAM": "BOS"
  },
  {
      "NBA_ID": 1630607,
      "FULL_NAME": "Chris Smith",
      "FNAME": "Chris",
      "LNAME": "Smith",
      "JERSEY_NUM": "0",
      "POS": "F",
      "TEAM": "DET"
  },
  {
      "NBA_ID": 202397,
      "FULL_NAME": "Ish Smith",
      "FNAME": "Ish",
      "LNAME": "Smith",
      "JERSEY_NUM": "10",
      "POS": "G",
      "TEAM": "WAS"
  },
  {
      "NBA_ID": 1630188,
      "FULL_NAME": "Jalen Smith",
      "FNAME": "Jalen",
      "LNAME": "Smith",
      "JERSEY_NUM": "25",
      "POS": "F-C",
      "TEAM": "IND"
  },
  {
      "NBA_ID": 1628372,
      "FULL_NAME": "Dennis Smith Jr.",
      "FNAME": "Dennis",
      "LNAME": "Smith Jr.",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1630270,
      "FULL_NAME": "Xavier Sneed",
      "FNAME": "Xavier",
      "LNAME": "Sneed",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": "UTA"
  },
  {
      "NBA_ID": 203503,
      "FULL_NAME": "Tony Snell",
      "FNAME": "Tony",
      "LNAME": "Snell",
      "JERSEY_NUM": "21",
      "POS": "G",
      "TEAM": "NOP"
  },
  {
      "NBA_ID": 1630531,
      "FULL_NAME": "Jaden Springer",
      "FNAME": "Jaden",
      "LNAME": "Springer",
      "JERSEY_NUM": "11",
      "POS": "G",
      "TEAM": "PHI"
  },
  {
      "NBA_ID": 1630199,
      "FULL_NAME": "Cassius Stanley",
      "FNAME": "Cassius",
      "LNAME": "Stanley",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 203917,
      "FULL_NAME": "Nik Stauskas",
      "FNAME": "Nik",
      "LNAME": "Stauskas",
      "JERSEY_NUM": "9",
      "POS": "G",
      "TEAM": "BOS"
  },
  {
      "NBA_ID": 202362,
      "FULL_NAME": "Lance Stephenson",
      "FNAME": "Lance",
      "LNAME": "Stephenson",
      "JERSEY_NUM": "6",
      "POS": "F",
      "TEAM": "IND"
  },
  {
      "NBA_ID": 1630205,
      "FULL_NAME": "Lamar Stevens",
      "FNAME": "Lamar",
      "LNAME": "Stevens",
      "JERSEY_NUM": "8",
      "POS": "F",
      "TEAM": "CLE"
  },
  {
      "NBA_ID": 1630597,
      "FULL_NAME": "DJ Stewart",
      "FNAME": "DJ",
      "LNAME": "Stewart",
      "JERSEY_NUM": "18",
      "POS": "G",
      "TEAM": "SAS"
  },
  {
      "NBA_ID": 1630191,
      "FULL_NAME": "Isaiah Stewart",
      "FNAME": "Isaiah",
      "LNAME": "Stewart",
      "JERSEY_NUM": "28",
      "POS": "F-C",
      "TEAM": "DET"
  },
  {
      "NBA_ID": 1629622,
      "FULL_NAME": "Max Strus",
      "FNAME": "Max",
      "LNAME": "Strus",
      "JERSEY_NUM": "31",
      "POS": "G-F",
      "TEAM": "MIA"
  },
  {
      "NBA_ID": 1630591,
      "FULL_NAME": "Jalen Suggs",
      "FNAME": "Jalen",
      "LNAME": "Suggs",
      "JERSEY_NUM": "4",
      "POS": "G",
      "TEAM": "ORL"
  },
  {
      "NBA_ID": 1628591,
      "FULL_NAME": "Craig Sword",
      "FNAME": "Craig",
      "LNAME": "Sword",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1626208,
      "FULL_NAME": "Keifer Sykes",
      "FNAME": "Keifer",
      "LNAME": "Sykes",
      "JERSEY_NUM": "28",
      "POS": "G",
      "TEAM": "IND"
  },
  {
      "NBA_ID": 1630256,
      "FULL_NAME": "Jae'Sean Tate",
      "FNAME": "Jae'Sean",
      "LNAME": "Tate",
      "JERSEY_NUM": "8",
      "POS": "F",
      "TEAM": "HOU"
  },
  {
      "NBA_ID": 1628369,
      "FULL_NAME": "Jayson Tatum",
      "FNAME": "Jayson",
      "LNAME": "Tatum",
      "JERSEY_NUM": "0",
      "POS": "F-G",
      "TEAM": "BOS"
  },
  {
      "NBA_ID": 1630678,
      "FULL_NAME": "Terry Taylor",
      "FNAME": "Terry",
      "LNAME": "Taylor",
      "JERSEY_NUM": "32",
      "POS": "F",
      "TEAM": "IND"
  },
  {
      "NBA_ID": 202066,
      "FULL_NAME": "Garrett Temple",
      "FNAME": "Garrett",
      "LNAME": "Temple",
      "JERSEY_NUM": "41",
      "POS": "G-F",
      "TEAM": "NOP"
  },
  {
      "NBA_ID": 1629150,
      "FULL_NAME": "Emanuel Terry",
      "FNAME": "Emanuel",
      "LNAME": "Terry",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 1630179,
      "FULL_NAME": "Tyrell Terry",
      "FNAME": "Tyrell",
      "LNAME": "Terry",
      "JERSEY_NUM": "3",
      "POS": "G",
      "TEAM": "MEM"
  },
  {
      "NBA_ID": 1630257,
      "FULL_NAME": "Jon Teske",
      "FNAME": "Jon",
      "LNAME": "Teske",
      "JERSEY_NUM": null,
      "POS": "C",
      "TEAM": null
  },
  {
      "NBA_ID": 1628464,
      "FULL_NAME": "Daniel Theis",
      "FNAME": "Daniel",
      "LNAME": "Theis",
      "JERSEY_NUM": "27",
      "POS": "F-C",
      "TEAM": "BOS"
  },
  {
      "NBA_ID": 1630271,
      "FULL_NAME": "Brodric Thomas",
      "FNAME": "Brodric",
      "LNAME": "Thomas",
      "JERSEY_NUM": "97",
      "POS": "G",
      "TEAM": "BOS"
  },
  {
      "NBA_ID": 1630560,
      "FULL_NAME": "Cam Thomas",
      "FNAME": "Cam",
      "LNAME": "Thomas",
      "JERSEY_NUM": "24",
      "POS": "G",
      "TEAM": "BKN"
  },
  {
      "NBA_ID": 202738,
      "FULL_NAME": "Isaiah Thomas",
      "FNAME": "Isaiah",
      "LNAME": "Thomas",
      "JERSEY_NUM": "31",
      "POS": "G",
      "TEAM": "CHA"
  },
  {
      "NBA_ID": 1629744,
      "FULL_NAME": "Matt Thomas",
      "FNAME": "Matt",
      "LNAME": "Thomas",
      "JERSEY_NUM": "21",
      "POS": "G",
      "TEAM": "CHI"
  },
  {
      "NBA_ID": 202691,
      "FULL_NAME": "Klay Thompson",
      "FNAME": "Klay",
      "LNAME": "Thompson",
      "JERSEY_NUM": "11",
      "POS": "G",
      "TEAM": "GSW"
  },
  {
      "NBA_ID": 202684,
      "FULL_NAME": "Tristan Thompson",
      "FNAME": "Tristan",
      "LNAME": "Thompson",
      "JERSEY_NUM": "3",
      "POS": "C-F",
      "TEAM": "CHI"
  },
  {
      "NBA_ID": 1630550,
      "FULL_NAME": "JT Thor",
      "FNAME": "JT",
      "LNAME": "Thor",
      "JERSEY_NUM": "21",
      "POS": "F",
      "TEAM": "CHA"
  },
  {
      "NBA_ID": 1629680,
      "FULL_NAME": "Matisse Thybulle",
      "FNAME": "Matisse",
      "LNAME": "Thybulle",
      "JERSEY_NUM": "22",
      "POS": "G-F",
      "TEAM": "PHI"
  },
  {
      "NBA_ID": 1629681,
      "FULL_NAME": "Killian Tillie",
      "FNAME": "Killian",
      "LNAME": "Tillie",
      "JERSEY_NUM": "35",
      "POS": "F-C",
      "TEAM": "MEM"
  },
  {
      "NBA_ID": 1630214,
      "FULL_NAME": "Xavier Tillman",
      "FNAME": "Xavier",
      "LNAME": "Tillman",
      "JERSEY_NUM": "2",
      "POS": "F",
      "TEAM": "MEM"
  },
  {
      "NBA_ID": 1630225,
      "FULL_NAME": "Isaiah Todd",
      "FNAME": "Isaiah",
      "LNAME": "Todd",
      "JERSEY_NUM": "14",
      "POS": "F",
      "TEAM": "WAS"
  },
  {
      "NBA_ID": 1630167,
      "FULL_NAME": "Obi Toppin",
      "FNAME": "Obi",
      "LNAME": "Toppin",
      "JERSEY_NUM": "1",
      "POS": "F",
      "TEAM": "NYK"
  },
  {
      "NBA_ID": 1629308,
      "FULL_NAME": "Juan Toscano-Anderson",
      "FNAME": "Juan",
      "LNAME": "Toscano-Anderson",
      "JERSEY_NUM": "95",
      "POS": "F",
      "TEAM": "GSW"
  },
  {
      "NBA_ID": 1626157,
      "FULL_NAME": "Karl-Anthony Towns",
      "FNAME": "Karl-Anthony",
      "LNAME": "Towns",
      "JERSEY_NUM": "32",
      "POS": "C-F",
      "TEAM": "MIN"
  },
  {
      "NBA_ID": 1629018,
      "FULL_NAME": "Gary Trent Jr.",
      "FNAME": "Gary",
      "LNAME": "Trent Jr.",
      "JERSEY_NUM": "33",
      "POS": "G-F",
      "TEAM": "TOR"
  },
  {
      "NBA_ID": 200782,
      "FULL_NAME": "P.J. Tucker",
      "FNAME": "P.J.",
      "LNAME": "Tucker",
      "JERSEY_NUM": "17",
      "POS": "F",
      "TEAM": "MIA"
  },
  {
      "NBA_ID": 1629730,
      "FULL_NAME": "Rayjon Tucker",
      "FNAME": "Rayjon",
      "LNAME": "Tucker",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1626167,
      "FULL_NAME": "Myles Turner",
      "FNAME": "Myles",
      "LNAME": "Turner",
      "JERSEY_NUM": "33",
      "POS": "C-F",
      "TEAM": "IND"
  },
  {
      "NBA_ID": 202685,
      "FULL_NAME": "Jonas Valanciunas",
      "FNAME": "Jonas",
      "LNAME": "Valanciunas",
      "JERSEY_NUM": "17",
      "POS": "C",
      "TEAM": "NOP"
  },
  {
      "NBA_ID": 1627756,
      "FULL_NAME": "Denzel Valentine",
      "FNAME": "Denzel",
      "LNAME": "Valentine",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1627832,
      "FULL_NAME": "Fred VanVleet",
      "FNAME": "Fred",
      "LNAME": "VanVleet",
      "JERSEY_NUM": "23",
      "POS": "G",
      "TEAM": "TOR"
  },
  {
      "NBA_ID": 1629020,
      "FULL_NAME": "Jarred Vanderbilt",
      "FNAME": "Jarred",
      "LNAME": "Vanderbilt",
      "JERSEY_NUM": "8",
      "POS": "F",
      "TEAM": "MIN"
  },
  {
      "NBA_ID": 1630170,
      "FULL_NAME": "Devin Vassell",
      "FNAME": "Devin",
      "LNAME": "Vassell",
      "JERSEY_NUM": "24",
      "POS": "G-F",
      "TEAM": "SAS"
  },
  {
      "NBA_ID": 1629216,
      "FULL_NAME": "Gabe Vincent",
      "FNAME": "Gabe",
      "LNAME": "Vincent",
      "JERSEY_NUM": "2",
      "POS": "G",
      "TEAM": "MIA"
  },
  {
      "NBA_ID": 202696,
      "FULL_NAME": "Nikola Vucevic",
      "FNAME": "Nikola",
      "LNAME": "Vucevic",
      "JERSEY_NUM": "9",
      "POS": "C",
      "TEAM": "CHI"
  },
  {
      "NBA_ID": 1629731,
      "FULL_NAME": "Dean Wade",
      "FNAME": "Dean",
      "LNAME": "Wade",
      "JERSEY_NUM": "32",
      "POS": "F-C",
      "TEAM": "CLE"
  },
  {
      "NBA_ID": 1630532,
      "FULL_NAME": "Franz Wagner",
      "FNAME": "Franz",
      "LNAME": "Wagner",
      "JERSEY_NUM": "22",
      "POS": "F",
      "TEAM": "ORL"
  },
  {
      "NBA_ID": 1629021,
      "FULL_NAME": "Moritz Wagner",
      "FNAME": "Moritz",
      "LNAME": "Wagner",
      "JERSEY_NUM": "21",
      "POS": "F-C",
      "TEAM": "ORL"
  },
  {
      "NBA_ID": 1630688,
      "FULL_NAME": "Ish Wainright",
      "FNAME": "Ish",
      "LNAME": "Wainright",
      "JERSEY_NUM": "12",
      "POS": "F",
      "TEAM": "PHX"
  },
  {
      "NBA_ID": 202689,
      "FULL_NAME": "Kemba Walker",
      "FNAME": "Kemba",
      "LNAME": "Walker",
      "JERSEY_NUM": "8",
      "POS": "G",
      "TEAM": "NYK"
  },
  {
      "NBA_ID": 1630640,
      "FULL_NAME": "MJ Walker",
      "FNAME": "MJ",
      "LNAME": "Walker",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1629022,
      "FULL_NAME": "Lonnie Walker IV",
      "FNAME": "Lonnie",
      "LNAME": "Walker IV",
      "JERSEY_NUM": "1",
      "POS": "G-F",
      "TEAM": "SAS"
  },
  {
      "NBA_ID": 202322,
      "FULL_NAME": "John Wall",
      "FNAME": "John",
      "LNAME": "Wall",
      "JERSEY_NUM": "1",
      "POS": "G",
      "TEAM": "HOU"
  },
  {
      "NBA_ID": 1628476,
      "FULL_NAME": "Derrick Walton Jr.",
      "FNAME": "Derrick",
      "LNAME": "Walton Jr.",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 202954,
      "FULL_NAME": "Brad Wanamaker",
      "FNAME": "Brad",
      "LNAME": "Wanamaker",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 203933,
      "FULL_NAME": "T.J. Warren",
      "FNAME": "T.J.",
      "LNAME": "Warren",
      "JERSEY_NUM": "1",
      "POS": "F",
      "TEAM": "IND"
  },
  {
      "NBA_ID": 1629023,
      "FULL_NAME": "P.J. Washington",
      "FNAME": "P.J.",
      "LNAME": "Washington",
      "JERSEY_NUM": "25",
      "POS": "F",
      "TEAM": "CHA"
  },
  {
      "NBA_ID": 1630613,
      "FULL_NAME": "Duane Washington Jr.",
      "FNAME": "Duane",
      "LNAME": "Washington Jr.",
      "JERSEY_NUM": "4",
      "POS": "G",
      "TEAM": "IND"
  },
  {
      "NBA_ID": 1629139,
      "FULL_NAME": "Yuta Watanabe",
      "FNAME": "Yuta",
      "LNAME": "Watanabe",
      "JERSEY_NUM": "18",
      "POS": "G-F",
      "TEAM": "TOR"
  },
  {
      "NBA_ID": 1629682,
      "FULL_NAME": "Tremont Waters",
      "FNAME": "Tremont",
      "LNAME": "Waters",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1630322,
      "FULL_NAME": "Lindy Waters III",
      "FNAME": "Lindy",
      "LNAME": "Waters III",
      "JERSEY_NUM": "12",
      "POS": "F",
      "TEAM": "OKC"
  },
  {
      "NBA_ID": 1630570,
      "FULL_NAME": "Trendon Watford",
      "FNAME": "Trendon",
      "LNAME": "Watford",
      "JERSEY_NUM": "2",
      "POS": "F",
      "TEAM": "POR"
  },
  {
      "NBA_ID": 1628778,
      "FULL_NAME": "Paul Watson",
      "FNAME": "Paul",
      "LNAME": "Watson",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": null
  },
  {
      "NBA_ID": 1629683,
      "FULL_NAME": "Quinndary Weatherspoon",
      "FNAME": "Quinndary",
      "LNAME": "Weatherspoon",
      "JERSEY_NUM": "15",
      "POS": "G",
      "TEAM": "GSW"
  },
  {
      "NBA_ID": 201566,
      "FULL_NAME": "Russell Westbrook",
      "FNAME": "Russell",
      "LNAME": "Westbrook",
      "JERSEY_NUM": "0",
      "POS": "G",
      "TEAM": "LAL"
  },
  {
      "NBA_ID": 1629632,
      "FULL_NAME": "Coby White",
      "FNAME": "Coby",
      "LNAME": "White",
      "JERSEY_NUM": "0",
      "POS": "G",
      "TEAM": "CHI"
  },
  {
      "NBA_ID": 1628401,
      "FULL_NAME": "Derrick White",
      "FNAME": "Derrick",
      "LNAME": "White",
      "JERSEY_NUM": "9",
      "POS": "G",
      "TEAM": "BOS"
  },
  {
      "NBA_ID": 202355,
      "FULL_NAME": "Hassan Whiteside",
      "FNAME": "Hassan",
      "LNAME": "Whiteside",
      "JERSEY_NUM": "21",
      "POS": "C",
      "TEAM": "UTA"
  },
  {
      "NBA_ID": 1630580,
      "FULL_NAME": "Joe Wieskamp",
      "FNAME": "Joe",
      "LNAME": "Wieskamp",
      "JERSEY_NUM": "15",
      "POS": "G-F",
      "TEAM": "SAS"
  },
  {
      "NBA_ID": 1630598,
      "FULL_NAME": "Aaron Wiggins",
      "FNAME": "Aaron",
      "LNAME": "Wiggins",
      "JERSEY_NUM": "21",
      "POS": "G",
      "TEAM": "OKC"
  },
  {
      "NBA_ID": 203952,
      "FULL_NAME": "Andrew Wiggins",
      "FNAME": "Andrew",
      "LNAME": "Wiggins",
      "JERSEY_NUM": "22",
      "POS": "F",
      "TEAM": "GSW"
  },
  {
      "NBA_ID": 1629623,
      "FULL_NAME": "Lindell Wigginton",
      "FNAME": "Lindell",
      "LNAME": "Wigginton",
      "JERSEY_NUM": "28",
      "POS": "G",
      "TEAM": "MIL"
  },
  {
      "NBA_ID": 1630314,
      "FULL_NAME": "Brandon Williams",
      "FNAME": "Brandon",
      "LNAME": "Williams",
      "JERSEY_NUM": null,
      "POS": "G",
      "TEAM": "POR"
  },
  {
      "NBA_ID": 1629684,
      "FULL_NAME": "Grant Williams",
      "FNAME": "Grant",
      "LNAME": "Williams",
      "JERSEY_NUM": "12",
      "POS": "F",
      "TEAM": "BOS"
  },
  {
      "NBA_ID": 1629026,
      "FULL_NAME": "Kenrich Williams",
      "FNAME": "Kenrich",
      "LNAME": "Williams",
      "JERSEY_NUM": "34",
      "POS": "G-F",
      "TEAM": "OKC"
  },
  {
      "NBA_ID": 101150,
      "FULL_NAME": "Lou Williams",
      "FNAME": "Lou",
      "LNAME": "Williams",
      "JERSEY_NUM": "6",
      "POS": "G",
      "TEAM": "ATL"
  },
  {
      "NBA_ID": 1630172,
      "FULL_NAME": "Patrick Williams",
      "FNAME": "Patrick",
      "LNAME": "Williams",
      "JERSEY_NUM": "44",
      "POS": "F",
      "TEAM": "CHI"
  },
  {
      "NBA_ID": 1630533,
      "FULL_NAME": "Ziaire Williams",
      "FNAME": "Ziaire",
      "LNAME": "Williams",
      "JERSEY_NUM": "8",
      "POS": "F",
      "TEAM": "MEM"
  },
  {
      "NBA_ID": 1629057,
      "FULL_NAME": "Robert Williams III",
      "FNAME": "Robert",
      "LNAME": "Williams III",
      "JERSEY_NUM": "44",
      "POS": "C-F",
      "TEAM": "BOS"
  },
  {
      "NBA_ID": 1629627,
      "FULL_NAME": "Zion Williamson",
      "FNAME": "Zion",
      "LNAME": "Williamson",
      "JERSEY_NUM": "1",
      "POS": "F",
      "TEAM": "NOP"
  },
  {
      "NBA_ID": 1628391,
      "FULL_NAME": "D.J. Wilson",
      "FNAME": "D.J.",
      "LNAME": "Wilson",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": null
  },
  {
      "NBA_ID": 1629685,
      "FULL_NAME": "Dylan Windler",
      "FNAME": "Dylan",
      "LNAME": "Windler",
      "JERSEY_NUM": "9",
      "POS": "G-F",
      "TEAM": "CLE"
  },
  {
      "NBA_ID": 1626159,
      "FULL_NAME": "Justise Winslow",
      "FNAME": "Justise",
      "LNAME": "Winslow",
      "JERSEY_NUM": "26",
      "POS": "F-G",
      "TEAM": "POR"
  },
  {
      "NBA_ID": 1630216,
      "FULL_NAME": "Cassius Winston",
      "FNAME": "Cassius",
      "LNAME": "Winston",
      "JERSEY_NUM": "5",
      "POS": "G",
      "TEAM": "WAS"
  },
  {
      "NBA_ID": 1630164,
      "FULL_NAME": "James Wiseman",
      "FNAME": "James",
      "LNAME": "Wiseman",
      "JERSEY_NUM": "33",
      "POS": "C",
      "TEAM": "GSW"
  },
  {
      "NBA_ID": 1626174,
      "FULL_NAME": "Christian Wood",
      "FNAME": "Christian",
      "LNAME": "Wood",
      "JERSEY_NUM": "35",
      "POS": "F",
      "TEAM": "HOU"
  },
  {
      "NBA_ID": 1630218,
      "FULL_NAME": "Robert Woodard II",
      "FNAME": "Robert",
      "LNAME": "Woodard II",
      "JERSEY_NUM": "17",
      "POS": "F",
      "TEAM": "SAS"
  },
  {
      "NBA_ID": 1626153,
      "FULL_NAME": "Delon Wright",
      "FNAME": "Delon",
      "LNAME": "Wright",
      "JERSEY_NUM": "0",
      "POS": "G",
      "TEAM": "ATL"
  },
  {
      "NBA_ID": 1630589,
      "FULL_NAME": "Moses Wright",
      "FNAME": "Moses",
      "LNAME": "Wright",
      "JERSEY_NUM": null,
      "POS": "F",
      "TEAM": "DAL"
  },
  {
      "NBA_ID": 1630593,
      "FULL_NAME": "McKinley Wright IV",
      "FNAME": "McKinley",
      "LNAME": "Wright IV",
      "JERSEY_NUM": "25",
      "POS": "G",
      "TEAM": "MIN"
  },
  {
      "NBA_ID": 201152,
      "FULL_NAME": "Thaddeus Young",
      "FNAME": "Thaddeus",
      "LNAME": "Young",
      "JERSEY_NUM": "21",
      "POS": "F",
      "TEAM": "TOR"
  },
  {
      "NBA_ID": 1629027,
      "FULL_NAME": "Trae Young",
      "FNAME": "Trae",
      "LNAME": "Young",
      "JERSEY_NUM": "11",
      "POS": "G",
      "TEAM": "ATL"
  },
  {
      "NBA_ID": 1630209,
      "FULL_NAME": "Omer Yurtseven",
      "FNAME": "Omer",
      "LNAME": "Yurtseven",
      "JERSEY_NUM": "77",
      "POS": "C",
      "TEAM": "MIA"
  },
  {
      "NBA_ID": 203469,
      "FULL_NAME": "Cody Zeller",
      "FNAME": "Cody",
      "LNAME": "Zeller",
      "JERSEY_NUM": null,
      "POS": "F-C",
      "TEAM": null
  },
  {
      "NBA_ID": 1627826,
      "FULL_NAME": "Ivica Zubac",
      "FNAME": "Ivica",
      "LNAME": "Zubac",
      "JERSEY_NUM": "40",
      "POS": "C",
      "TEAM": "LAC"
  }
]

const score = 0;

export default function Home() {

  // Input Field States
  const [name, setName] = useState("");
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(true);

  // Team Selection States
  const [currTeam, setCurrTeam] = useState("ATL");

  // Start/Timer Button States
  const [timerVal, setTimerVal] = useState("Start Game");
  const [timerDisabled, setTimerDisabled] = useState(false);
  
  // react-countdown timer renderer function
  const renderer = ({ formatted: {minutes, seconds}, completed}) => {
      /* formatted: takes the formatted componenets based on the props.
    in this case its used to utilize the zeroPadTime{2} prop to display
    numbers like 00:00. Numbers show as 0:0 without. */
    if (completed) {
        setTimerVal("Good Job!")
        return <span>{timerVal}</span>;
    } else {
        return <span>{minutes}:{seconds}</span>;
    }
}
    const queryData = (e) => {
    e.preventDefault();
    console.log(name);
    if (players_data.filter(player => player.FULL_NAME.toLowerCase() === name.toLowerCase()).length > 0) {
        console.log("VALID PLAYER: " + name);
        score++;
        console.log("CURRENT SCORE: " + score)
        let curr_player_data = players_data.find(player => player.FULL_NAME.toLowerCase() === name.toLowerCase());
        if (curr_player_data.TEAM != currTeam) { setCurrTeam(curr_player_data.TEAM) } // switch grid to player team if you guess correct player on another team
    } else { console.log("NO PLAYER WITH NAME: " + name) }
    setName(""); // clear field after enter
    }

  function startGameFunc() {
    /*  After click set the button text to a countdown timer. 
    The date prop decides how long the countdown is. We get the current
    time and add 300000 milliseconds (5 minutes) to set the timer to 5
    minutes.
    zeroPadTime{2} pads the time to appear as 00:00:00.
    The renderer prop uses the renderer function to format the countdown
    to our liking. */
    if (submitBtnDisabled === true) { setSubmitBtnDisabled(false); }
    setTimerDisabled(true);
    setTimerVal(<Countdown date={Date.now() + 30000} zeroPadTime={2} renderer={renderer} onComplete={() => {setTimerDisabled(false); setSubmitBtnDisabled(true); console.log("FINAL SCORE: " + score)}} />);
  }

  // Players map
  const players_arr = players_data.filter(player => player.TEAM===currTeam).map((data, id) => { // filter the whole player array data to players with team == currTeam
    if (data.JERSEY_NUM) {
      var jersey_no = "#" + data.JERSEY_NUM;
    } else { jersey_no = "-"}

    return (
      <PlayerBox key={id} name={data.FULL_NAME} team={data.TEAM} number={jersey_no} position={data.POS} />
    )
  })

  return (
    <div>
      <Head>
        <title>NBA Player Guess</title>
        <meta name="description" content="Name as many NBA players as you can within the time limit!" />
        <link rel="icon" href="/basketball-ball.png" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <main>
        <h1 className="text-lg md:text-xl font-semibold tracking-wide break-words flex justify-center py-7 px-3 md:px-0">
          How Many NBA Players Can You Name Within The Time Limit?
        </h1>
        
        {/* Start Input/Submit */}
        <div className='flex justify-center items-center'>
          {/* Player Name Form */}
          <div className='flex justify-center'>
            <form className='block md:flex md:items-center' onSubmit={queryData}>
              <div className='flex border-b border-[#17408B] py-2'>
                <input
                  className='appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 focus:outline-none focus:ring-0'
                  type="text"
                  placeholder="NBA Player Name"
                  value={name}
                  onInput={e => {setName(e.target.value)}}
                />
                <button
                  className="flex-shrink-0 bg-[#17408B] hover:bg-[#102D61] border-[#17408B] hover:border-[#102D61] text-sm border-4 text-white py-1 px-2 rounded disabled:bg-gray-500 disabled:border-gray-500 disabled:hover:cursor-not-allowed"
                  id="submitBtn"
                  disabled={submitBtnDisabled}
                >
                  Submit
                </button>
              </div>
              {/* Start BTN */}
              <div className='flex justify-end'>
              <button
                className="flex-shrink-0 bg-[#C9082A] hover:bg-[#8D061D] border-[#C9082A] hover:border-[#8D061D] text-sm border-4 text-white py-1 px-7 rounded mt-5 md:mt-0 md:ml-8 disabled:hover:bg-[#C9082A] disabled:hover:cursor-not-allowed disabled:hover:border-[#C9082A]"
                disabled={timerDisabled}
                type="button"
                onClick={startGameFunc}
              >
                {timerVal}
              </button>
              {/* End Start BTN */}
              </div>
            </form>
          </div>
        </div>
        {/* End Input/Submit */}

        {/* Player Boxes */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-5 gap-4 px-5">
          {players_arr}
        </div>
      </main>
    </div>
  )
}
