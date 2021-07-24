import "quill/dist/quill.core.css";
import {React, useEffect, useState} from 'react';
import dynamic from 'next/dynamic';
import {io} from 'socket.io-client';
import { useRouter } from "next/dist/client/router";
import Router from "next/dist/next-server/server/router";

const SAVE_INTERVAL_MS = 2000;
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
        toolbar: [
          ["bold", "italic"],
          ["link", "blockquote", "code", "image"],
          [
            {
              list: "ordered",
            },
            {
              list: "bullet",
            },
          ],
        ],
      },
      theme: "snow",
    });
    q.disable()
    q.setText("Loading...")
    setQuill(q);

  }, []);




  return (
    <div className="p-4 w-2/3 mx-auto">
      <div id="QuillEditor" className="bg-gray-100 p-3"/>
    </div>
  );
}

export default Example;