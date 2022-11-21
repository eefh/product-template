import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Title from "../components/landing/Title";
import Splash from "../components/landing/Splash";

export default function Home() {
    return (
        <div>
            <Title></Title>
            <Splash></Splash>
        </div>
    );
}
