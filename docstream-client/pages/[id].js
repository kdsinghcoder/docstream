import "quill/dist/quill.core.css";
import {React, useEffect, useState} from 'react';
import dynamic from 'next/dynamic';
import {io} from 'socket.io-client';
import { useRouter } from "next/dist/client/router";
import Router from "next/dist/next-server/server/router";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import ShareModal from "../components/modal/ShareModal";
const SAVE_INTERVAL_MS = 2000;
const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline",'strike'],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  [{ 'size': ['small', 'normal', 'large', 'huge'] }],  // custom dropdown
  ["clean"],
  [{ 'direction': 'rtl' }],                         // text direction
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript

]

var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons


];


function Example() {
  
  const [socket, setSocket] = useState()
  const [quill, setQuill] = useState()

  const router = useRouter();
  const { id: documentId } = router.query;

  
  
  useEffect(() => {
    const s = io("http://localhost:3001")
    setSocket(s)

    return () => {
      s.disconnect()
    }
  }, [])

  useEffect(() => {
    if (socket == null || quill == null) return

    socket.once("load-document", document => {
      quill.setContents(document)
      quill.enable()
    })

    socket.emit("get-document", documentId)
  }, [socket, quill, documentId])


  useEffect(() => {
    

    const interval =setInterval(()=>{
      socket.emit('save-document',quill.getContents())
    },SAVE_INTERVAL_MS)
    return () => {
      clearInterval(interval)
    }
  }, [socket, quill])

  useEffect(() => {
    if (socket == null || quill == null) return

    const handler = (delta) => {
     quill.updateContents(delta)
    }
    socket.on("receive-changes", handler)

    return () => {
      socket.off("receive-changes", handler)
    }
  }, [socket, quill])

  useEffect(() => {
    if (socket == null || quill == null) return

    const handler = (delta, oldDelta, source) => {
      if (source !== "user") return
      socket.emit("send-changes", delta)
    }
    quill.on("text-change", handler)

    return () => {
      quill.off("text-change", handler)
    }
  }, [socket, quill])


  useEffect(async () => {
    // we  a   the , as this component is not made to work on SSR
    if(document.querySelector("#QuillEditor").innerHTML != "" ) return
    const Quill = (await import("quill")).default;
    const q = new Quill(document.querySelector('#QuillEditor'), {
      modules: {
        toolbar: TOOLBAR_OPTIONS
      },
      theme: "snow",
    });
    q.disable()
    q.setText("Loading...")
    setQuill(q);

  }, []);




  return (
    <>
    <header className="flex justify-between items-center p-4 z-50 bg-white " p-3 pb-1>
        <span onClick={() => router.push("/")} className="cursor-pointer">
          <Icon name="description" size="5xl" color="blue" />
        </span>
        <div className="flex-grow px-2">
          <h2>{documentId}</h2>
        </div>

        <ShareModal />
        
    <br />
      </header>

    <div className="mx-auto" id="container">
      <div id="QuillEditor" className="bg-gray-100"/>
    </div>

    </>
  );
}

export default Example;