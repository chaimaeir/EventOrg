import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, TreeSelect, Upload } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import axios from 'axios';
import { motion } from 'framer-motion';

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const EventForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


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
    <div className='flex items-center justify-center'>
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        layout="horizontal"
        style={{ maxWidth: 800 }}
        className='min-w-[800px] p-10 '
        onFinish={onFinish}
      >
        <Form.Item name="name" label="Event Name" rules={[{ required: true }]}>
          
          <Input className='bg-gradient-to-r from-[#e8672f] to-[#f9a27b] h-[60px] text-white'/>
        </Form.Item>
        <Form.Item name="type" label="Event Type" rules={[{ required: true }]}>
          <TreeSelect className='h-[60px] bg-[#e8672f]'
            treeData={[
              {
                title: 'Corporate',
                value: 'Corporate',
                children: [
                  { title: 'Conference', value: 'Conference' },
                  { title: 'Team Building', value: 'Team Building' },
                  { title: 'Product Launching', value: 'Product Launching' },
                ],
              },
              {
                title: 'Celebration',
                value: 'Celebration',
                children: [
                  { title: 'Wedding', value: 'Wedding' },
                  { title: 'Engagement', value: 'Engagement' },
                  { title: 'Graduation', value: 'Graduation' },
                  { title: 'Anniversary', value: 'Anniversary' },
                  { title: 'Baby Shower', value: 'Baby Shower' },
                  { title: 'Birthday', value: 'Birthday' },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item name="description" label="Description" rules={[{ required: true }]}>
          <TextArea className='bg-gradient-to-r from-[#e8672f] to-[#f9a27b]  text-white ' rows={4} />
        </Form.Item>
        <Form.Item name="guestNumber" label="Guest Number" rules={[{ required: true }]}>
          <InputNumber className='w-full bg-gradient-to-r from-[#e8672f] to-[#f9a27b] h-[60px] text-white' />
        </Form.Item>
        <Form.Item name="price" label="Price" rules={[{ required: true }]}>
          <InputNumber className='w-full bg-gradient-to-r from-[#e8672f] to-[#f9a27b] h-[60px] text-white' />
        </Form.Item>
        <Form.Item name="venue" label="Venue" rules={[{ required: true }]}>
          <Input className='bg-gradient-to-r from-[#e8672f] to-[#f9a27b] h-[60px] text-white' />
        </Form.Item>
        <Form.Item name="city" label="City" rules={[{ required: true }]}>
          <Input  className='bg-gradient-to-r from-[#e8672f] to-[#f9a27b] h-[60px] text-white'/>
        </Form.Item>
        <Form.Item name="theme" label="Theme" rules={[{ required: true }]}>
          <Input className='bg-gradient-to-r from-[#e8672f] to-[#f9a27b] h-[60px] text-white' />
        </Form.Item>
        <Form.Item
          name="picture"
          label="Pictures"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item className='flex items-center justify-center'>
          <Button type="primary" htmlType="submit" loading={loading}>
            Create Event
          </Button>
        </Form.Item>
      </Form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default EventForm;
