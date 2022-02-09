/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestInfo, RequestInit } from "node-fetch";

const fetch = (url: RequestInfo, init?: RequestInit) =>
  import("node-fetch").then(({ default: fetch }) => fetch(url, init));

export async function conversorMoedas(moeda: string) {
  const API_URL =
    "https://economia.awesomeapi.com.br/last/GBP-BRL,NOK-BRL,BTC-BRL,NZD-BRL,CHF-BRL,ETH-BRL,DKK-BRL,COP-BRL,RUB-BRL,CNY-BRL,INR-BRL,MXN-BRL,PLN-BRL,EUR-BRL,SAR-BRL,TRY-BRL,PYG-BRL,AED-BRL,HKD-BRL,XRP-BRL,ZAR-BRL,CAD-BRL,JPY-BRL,ILS-BRL,USD-BRL,SEK-BRL,THB-BRL,PEN-BRL,SGD-BRL,DOGE-BRL,TWD-BRL,LTC-BRL,AUD-BRL,CLP-BRL,BOB-BRL,ARS-BRL,UYU-BRL";

  const result = await fetch(API_URL);
  const data = await result.json();

  if (typeof moeda !== "string") {
    return null;
  }

  if (moeda == "dolar") {
    return data.USDBRL.ask;
  } else if (moeda == "libraEsterlina") {
    return data.GBPBRL.ask;
  } else if (moeda == "coroaNorueguesa") {
    return data.NOKBRL.ask;
  } else if (moeda == "bitcoin") {
    return data.BTCBRL.ask * 1000;
  } else if (moeda == "dolarNeozelandes") {
    return data.NZDBRL.ask;
  } else if (moeda == "francoSuico") {
    return data.CHFBRL.ask;
  } else if (moeda == "etherium") {
    return data.ETHBRL.ask;
  } else if (moeda == "coroaDinamarquesa") {
    return data.DKKBRL.ask;
  } else if (moeda == "pesoColombiano") {
    return data.COPBRL.ask;
  } else if (moeda == "rubloRusso") {
    return data.RUBBRL.ask;
  } else if (moeda == "yuanChines") {
    return data.CNYBRL.ask;
  } else if (moeda == "rupiaIndiana") {
    return data.INRBRL.ask;
  } else if (moeda == "pesoMexicano") {
    return data.MXNBRL.ask;
  } else if (moeda == "zlotiPolones") {
    return data.PLNBRL.ask;
  } else if (moeda == "euro") {
    return data.EURBRL.ask;
  } else if (moeda == "riyalSaudita") {
    return data.SARBRL.ask;
  } else if (moeda == "novaLiraTurca") {
    return data.TRYBRL.ask;
  } else if (moeda == "guaraniParaguaio") {
    return data.PYGBRL.ask;
  } else if (moeda == "dirhamDosEmirados") {
    return data.AEDBRL.ask;
  } else if (moeda == "dolarHongKong") {
    return data.HKDBRL.ask;
  } else if (moeda == "xrp") {
    return data.XRPBRL.ask;
  } else if (moeda == "randSulAfricano") {
    return data.ZARBRL.ask;
  } else if (moeda == "dolarCanadense") {
    return data.CADBRL.ask;
  } else if (moeda == "ieneJapones") {
    return data.JPYBRL.ask;
  } else if (moeda == "novoShekelIsraelense") {
    return data.ILSBRL.ask;
  } else if (moeda == "coroaSueca") {
    return data.SEKBRL.ask;
  } else if (moeda == "bahtTailandes") {
    return data.THBBRL.ask;
  } else if (moeda == "solDoPeru") {
    return data.PENBRL.ask;
  } else if (moeda == "dolarCingapura") {
    return data.SGDBRL.ask;
  } else if (moeda == "dogecoin") {
    return data.DOGEBRL.ask;
  } else if (moeda == "dolarTaiunes") {
    return data.TWDBRL.ask;
  } else if (moeda == "litecoin") {
    return data.LTCBRL.ask;
  } else if (moeda == "dolarAustraliano") {
    return data.AUDBRL.ask;
  } else if (moeda == "pesoChileno") {
    return data.CLPBRL.ask;
  } else if (moeda == "boliviano") {
    return data.BOBBRL.ask;
  } else if (moeda == "pesoArgentino") {
    return data.ARSBRL.ask;
  } else if (moeda == "pesoUruguaio") {
    return data.UYUBRL.ask;
  } else {
    return null;
  }
}
