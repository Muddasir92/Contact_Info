import React from "react";
import Card from "./card";
import "../App.css";

function contactInfo() {
  return (
    <div>
      <div className="nav">
        <h1 className="header">My Contacts</h1>
      </div>

      <div className="container">
        <Card
          name="Muddasir"
          img="https://scontent.flhe32-1.fna.fbcdn.net/v/t39.30808-6/449789873_1846171405862152_4171327288400058236_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG3GJjLduyO8cGbIxr4d2kZoFYhiWNFd7GgViGJY0V3sbbcX_nfbuWLU4PoJpMYKfrqm3i6bLJX-NZwxqDY6Hen&_nc_ohc=OcpyBI88qZQQ7kNvgHZ1JOu&_nc_pt=1&_nc_ht=scontent.flhe32-1.fna&oh=00_AYANgeH_smLrlchl6jfDOxCgooLq7nBB6fBEdGgKGZgbqA&oe=66C38E76"
          tel="+92 322 8733898"
          email="m.muddasirjaved@gmail.com"
        />
        <Card
          name="Ayesha Khan"
          img="https://randomuser.me/api/portraits/women/1.jpg"
          tel="+92 321 1234567"
          email="ayesha.khan@example.com"
        />

        <Card
          name="Ali Hassan"
          img="https://randomuser.me/api/portraits/men/1.jpg"
          tel="+92 322 9876543"
          email="ali.hassan@example.com"
        />

        <Card
          name="Sara Ahmed"
          img="https://randomuser.me/api/portraits/women/2.jpg"
          tel="+92 331 4567890"
          email="sara.ahmed@example.com"
        />

        <Card
          name="Omar Farooq"
          img="https://randomuser.me/api/portraits/men/2.jpg"
          tel="+92 344 7654321"
          email="omar.farooq@example.com"
        />

        <Card
          name="Fatima Raza"
          img="https://randomuser.me/api/portraits/women/3.jpg"
          tel="+92 300 1122334"
          email="fatima.raza@example.com"
        />

        <Card
          name="Ahmed Siddiqui"
          img="https://randomuser.me/api/portraits/men/3.jpg"
          tel="+92 315 2233445"
          email="ahmed.siddiqui@example.com"
        />

        <Card
          name="Zainab Malik"
          img="https://randomuser.me/api/portraits/women/4.jpg"
          tel="+92 301 3344556"
          email="zainab.malik@example.com"
        />

        <Card
          name="Hassan Ali"
          img="https://randomuser.me/api/portraits/men/4.jpg"
          tel="+92 321 4455667"
          email="hassan.ali@example.com"
        />

        <Card
          name="Nida Farhan"
          img="https://randomuser.me/api/portraits/women/5.jpg"
          tel="+92 345 5566778"
          email="nida.farhan@example.com"
        />

        <Card
          name="Usman Tariq"
          img="https://randomuser.me/api/portraits/men/5.jpg"
          tel="+92 312 6677889"
          email="usman.tariq@example.com"
        />
      </div>
    </div>
  );
}

export default contactInfo;
