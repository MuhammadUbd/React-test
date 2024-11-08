import React from 'react'
import "./Form.css"
import { Button, Checkbox, Form, Input } from 'antd';
import { toast } from 'react-toastify';

const onFinishFailed = (errorInfo) => {
    toast.error("Failed to Submit")
    // console.log('Failed:', errorInfo);
};
const ContactForm = () => {
    const [form] = Form.useForm()
    const onFinish = (values) => {
        toast.success("Submitted Successfully")
        // console.log('Success:', values);
        form.resetFields()
    };
    return (
        <div className='all'>
            <h1 className='cont-head'>Contact Us</h1>
            <Form
                form={form}
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
};
export default ContactForm;

