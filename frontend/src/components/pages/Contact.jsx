import Navbar from "../shared/Navbar"
import arrow from "../../assets/images/arrow.png"
import { motion } from 'framer-motion';



import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, TreeSelect, Upload } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import axios from 'axios';

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const Contact = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };

  const onFinish = async (values) => {
    setLoading(true);
    setError(null);
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      if (key === 'pictures') {
        values[key].forEach((file) => formData.append('pictures', file.originFileObj));
      } else {
        formData.append(key, values[key]);
      }
    });

    try {
      await axios.post('http://localhost:3000/api/events', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setLoading(false);
      form.resetFields();
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || err.message);
    }
  };

  return (
    <div>
      <Navbar />
      
      <div className=" mx-20 mt-5 px-10 flex justify-between">
        <motion.div
 
  initial="hidden"
  animate="visible"
  variants={fadeInVariants} className="mx-10 mt-16 flex flex-col gap-8  ">
        <img src={arrow} className="max-h-[80px] max-w-[100px]  rotate-180 ml-auto" alt="" />

          <h2 className="text-7xl text-[#213f2e] font-semibold font-imbue">Give Us The Juicy Deets!</h2>
          <p className="text-[16px] font-extralight">The beginning of your perfect event is having the best possible
            understanding of your vision. Let us know, in as much detail as
            you can, what you’re dreaming of and we’ll get the party started!</p>
        </motion.div>

        <div className='m-10'>
          <Form
            form={form}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            layout="horizontal"
            style={{ maxWidth: 800 }}
            className=' py-10  flex items-center justify-center flex-col '
            onFinish={onFinish}
          >
            <Form.Item  name="Full name"  rules={[{ required: true }]}>
              <Input placeholder="Full Name" className="min-w-[700px] h-[60px] bg-[#e8672f]  hover:bg-[#f9e0d6] border border-none "/>
            </Form.Item>
            <Form.Item  name="Email" rules={[{ required: true }]}>
              <Input placeholder="Email" className="min-w-[700px] h-[60px] bg-[#e8672f] hover:bg-[#f9e0d6] border border-none  "/>
            </Form.Item>
            <Form.Item name="Message"  rules={[{ required: true }]}>
              <TextArea placeholder="Message" className="min-w-[700px] bg-[#e8672f] hover:bg-[#f9e0d6] border border-none " rows={8} />
            </Form.Item>
            <Form.Item >
              <Button className="text-[#e8672f] h-[40px]  bg-white  border border-[#e8672f] hover:bg-[#e8672f]"  htmlType="submit" loading={loading}>
                Send message
              </Button>
            </Form.Item>
          </Form>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
        </div>
      </div>

    </div>

  );
};

export default Contact;
