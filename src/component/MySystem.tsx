import React from 'react';
import { Row, Layout, Col, Input, Button } from 'antd';
import './MySystem.css';
import { myData, dataList, url } from './util/constant';
import { Link } from 'react-router-dom';

interface iprops { }
interface istate {
    myData: myData,
    name: string,
    hbzj: number,
    jyxjrzc: number,
    yspjjyszk: number,
    qtyszkhj: number,
    ldzc: number,
    zczj: number,
    ldfzhj: number,
    fzhj: number,
}

export default class MySystem extends React.Component<iprops, istate> {
    constructor(props: any) {
        super(props);
        this.state = {
            myData: {
                name: '',
                one: { 流动负债: 1, 流动资产: 0, 速动资产: 0, 现金: 0, 负债总额: 0, 资产总额: 1 },
                two: { 流动负债: 1, 流动资产: 0, 速动资产: 0, 现金: 0, 负债总额: 0, 资产总额: 1 },
                three: { 流动负债: 1, 流动资产: 0, 速动资产: 0, 现金: 0, 负债总额: 0, 资产总额: 1 },
                four: { 流动负债: 1, 流动资产: 0, 速动资产: 0, 现金: 0, 负债总额: 0, 资产总额: 1 },
                five: { 流动负债: 1, 流动资产: 0, 速动资产: 0, 现金: 0, 负债总额: 0, 资产总额: 1 },
                six: { 流动负债: 1, 流动资产: 0, 速动资产: 0, 现金: 0, 负债总额: 0, 资产总额: 1 },
                seven: { 流动负债: 1, 流动资产: 0, 速动资产: 0, 现金: 0, 负债总额: 0, 资产总额: 1 }
            },
            name: '',
            hbzj: 0,
            jyxjrzc: 0,
            yspjjyszk: 0,
            qtyszkhj: 0,
            ldzc: 0,
            zczj: 0,
            ldfzhj: 0,
            fzhj: 0,
        }
        this.addClick = this.addClick.bind(this);
        this.saveClick = this.saveClick.bind(this);
    }

    addClick = () => {
        const dl: dataList = { 流动负债: 1, 流动资产: 0, 速动资产: 0, 现金: 0, 负债总额: 0, 资产总额: 1 };
        dl.流动负债 = this.state.ldfzhj;
        dl.流动资产 = this.state.ldzc;
        dl.速动资产 = this.state.hbzj + this.state.jyxjrzc + this.state.yspjjyszk + this.state.qtyszkhj;
        dl.现金 = this.state.hbzj;
        dl.负债总额 = this.state.fzhj;
        dl.资产总额 = this.state.zczj;
        const myData = this.state.myData;
        if (myData.name !== this.state.name) {
            myData.name = this.state.name;
        }
        if (myData.seven.流动负债 === 1) {
            myData.seven = dl;
        } else if (myData.six.流动负债 === 1) {
            myData.six = dl;
        } else if (myData.five.流动负债 === 1) {
            myData.five = dl;
        } else if (myData.four.流动负债 === 1) {
            myData.four = dl;
        } else if (myData.three.流动负债 === 1) {
            myData.three = dl;
        } else if (myData.two.流动负债 === 1) {
            myData.two = dl;
        } else if (myData.one.流动负债 === 1) {
            myData.one = dl;
        }
        this.setState({
            myData: myData,
        })
    }

    saveClick = () => {
        window.fetch(url + 'debt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'debt=' + JSON.stringify(this.state.myData),
        })
            .then(res => res.json())
            .then(data => {
                alert(data);
            });
    }

    render() {
        const showList = this.state.myData;
        return (
            <Layout>
                <Row>
                    <Col span={12}>
                        <Row>
                            <Col span={4}><b>名称：</b></Col>
                            <Col span={4}><Input type='text' onChange={(event) => { this.setState({ name: event.target.value }) }} size='small' /></Col>
                        </Row>
                        <Row>
                            <Col><h2>流动资产</h2></Col>
                        </Row>
                        <Row>
                            <Col span={4}><b>货币资金：</b></Col>
                            <Col span={4}><Input type='number' onChange={(event) => { this.setState({ hbzj: Number(event.target.value) }) }} size='small' /></Col>
                        </Row>
                        <Row>
                            <Col span={4}><b>交易性金融资产：</b></Col>
                            <Col span={4}><Input type='number' onChange={(event) => { this.setState({ jyxjrzc: Number(event.target.value) }) }} size='small' /></Col>
                        </Row>
                        <Row>
                            <Col span={4}><b>应收票据及应收账款：</b></Col>
                            <Col span={4}><Input type='number' onChange={(event) => { this.setState({ yspjjyszk: Number(event.target.value) }) }} size='small' /></Col>
                        </Row>
                        <Row>
                            <Col span={4}><b>其他应收账款合计：</b></Col>
                            <Col span={4}><Input type='number' onChange={(event) => { this.setState({ qtyszkhj: Number(event.target.value) }) }} size='small' /></Col>
                        </Row>
                        <Row>
                            <Col span={4}><b>流动资产合计：</b></Col>
                            <Col span={4}><Input type='number' onChange={(event) => { this.setState({ ldzc: Number(event.target.value) }) }} size='small' /></Col>
                        </Row>
                        <Row><h2>资产总计</h2></Row>
                        <Row>
                            <Col span={4}><b>资产总计：</b></Col>
                            <Col span={4}><Input type='number' onChange={(event) => { this.setState({ zczj: Number(event.target.value) }) }} size='small' /></Col>
                        </Row>
                        <Row><h2>流动负债</h2></Row>
                        <Row>
                            <Col span={4}><b>流动负债合计：</b></Col>
                            <Col span={4}><Input type='number' onChange={(event) => { this.setState({ ldfzhj: Number(event.target.value) }) }} size='small' /></Col>
                        </Row>
                        <Row><h2>负债合计</h2></Row>
                        <Row>
                            <Col span={4}><b>负债合计：</b></Col>
                            <Col span={4}><Input type='number' onChange={(event) => { this.setState({ fzhj: Number(event.target.value) }) }} size='small' /></Col>
                        </Row>
                        <Row>
                            <Col span={4}></Col>
                            <Col span={4}>
                                <Button onClick={this.addClick}>添加</Button>
                                <Button onClick={this.saveClick}>保存</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <Link to='/main'><Button>视图页</Button></Link>
                        <div>{showList.name}</div>
                        <div>{new Date().getFullYear() - 1 + ':' + JSON.stringify(showList.seven)}</div>
                        <div>{new Date().getFullYear() - 2 + ':' + JSON.stringify(showList.six)}</div>
                        <div>{new Date().getFullYear() - 3 + ':' + JSON.stringify(showList.five)}</div>
                        <div>{new Date().getFullYear() - 4 + ':' + JSON.stringify(showList.four)}</div>
                        <div>{new Date().getFullYear() - 5 + ':' + JSON.stringify(showList.three)}</div>
                        <div>{new Date().getFullYear() - 6 + ':' + JSON.stringify(showList.two)}</div>
                        <div>{new Date().getFullYear() - 7 + ':' + JSON.stringify(showList.one)}</div>
                    </Col>
                </Row>
            </Layout>
        )
    }
}