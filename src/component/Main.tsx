import React from 'react';
import './Main.css';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import { Row, Col, Layout } from 'antd';
import { yearList, colors, options, myData, myLine } from './util/constant';

interface iProps { }

interface iState {
    ldbl?: Array<myLine>,
    sdbl?: Array<myLine>,
    xjbl?: Array<myLine>,
    zcfzl?: Array<myLine>,
}

export default class Main extends React.Component<iProps, iState> {
    constructor(props: Array<any>) {
        super(props);
        this.state = {
            ldbl: [],
            sdbl: [],
            xjbl: [],
            zcfzl: [],
        }
    }

    componentDidMount() {
        const data: Array<myData> = require('./../data').myData;
        const ldbl: Array<myLine> = [];
        const sdbl: Array<myLine> = [];
        const xjbl: Array<myLine> = [];
        const zcfzl: Array<myLine> = [];
        data.forEach((element: myData, index: number) => {
            // 计算每只stock的流动比率
            const lLine: myLine = {
                label: element.name,
                borderColor: colors[index],
                borderWidth: 1,
                data: this.calculateResult(element, 'ldbl'),
            }
            // 计算每只stock的流动比率
            const sLine: myLine = {
                label: element.name,
                borderColor: colors[index],
                borderWidth: 1,
                data: this.calculateResult(element, 'sdbl'),
            }
            // 计算每只stock的流动比率
            const xLine: myLine = {
                label: element.name,
                borderColor: colors[index],
                borderWidth: 1,
                data: this.calculateResult(element, 'xjbl'),
            }
            // 计算每只stock的流动比率
            const zLine: myLine = {
                label: element.name,
                borderColor: colors[index],
                borderWidth: 1,
                data: this.calculateResult(element, 'zcfzl'),
            }
            ldbl.push(lLine);
            sdbl.push(sLine);
            xjbl.push(xLine);
            zcfzl.push(zLine);
        });

        this.setState({
            ldbl: ldbl,
            sdbl: sdbl,
            xjbl: xjbl,
            zcfzl: zcfzl,
        })
    }

    calculateResult(element: myData, flag: string): Array<number> {
        switch (flag) {
            case 'ldbl': // 流动比率
                return [element.one.流动资产 / element.one.流动负债, element.two.流动资产 / element.two.流动负债, element.three.流动资产 / element.three.流动负债, element.four.流动资产 / element.four.流动负债, element.five.流动资产 / element.five.流动负债, element.six.流动资产 / element.six.流动负债, element.seven.流动资产 / element.seven.流动负债]
            case 'sdbl': //
                return [element.one.速动资产 / element.one.流动负债, element.two.速动资产 / element.two.流动负债, element.three.速动资产 / element.three.流动负债, element.four.速动资产 / element.four.流动负债, element.five.速动资产 / element.five.流动负债, element.six.速动资产 / element.six.流动负债, element.seven.速动资产 / element.seven.流动负债]
            case 'xjbl':
                return [element.one.现金 / element.one.流动负债, element.two.现金 / element.two.流动负债, element.three.现金 / element.three.流动负债, element.four.现金 / element.four.流动负债, element.five.现金 / element.five.流动负债, element.six.现金 / element.six.流动负债, element.seven.现金 / element.seven.流动负债]
            case 'zcfzl':
                return [element.one.负债总额 / element.one.资产总额, element.two.负债总额 / element.two.资产总额, element.three.负债总额 / element.three.资产总额, element.four.负债总额 / element.four.资产总额, element.five.负债总额 / element.five.资产总额, element.six.负债总额 / element.six.资产总额, element.seven.负债总额 / element.seven.资产总额]
            default:
                return [];
        }
    }

    render() {
        let LineChart = Line;
        const yl = yearList(new Date('2019-09-20'));
        const lData = {
            labels: yl,
            datasets: this.state.ldbl,
        };
        const sData = {
            labels: yl,
            datasets: this.state.sdbl,
        };
        const xData = {
            labels: yl,
            datasets: this.state.xjbl,
        };
        const zData = {
            labels: yl,
            datasets: this.state.zcfzl,
        };

        return (
            <Layout>
                <Layout.Header>
                    <div className='header'><Link to='/mySystem'>财务分析曲线图</Link></div>
                </Layout.Header>
                <Row>
                    <Col span={12}>
                        <div className='chart-box'>
                            <LineChart data={lData} options={options} />
                            <div className='line-title'><b>流动比率</b></div>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className='chart-box'>
                            <LineChart data={sData} options={options} />
                            <div className='line-title'><b>速动比率</b></div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <div className='chart-box'>
                            <LineChart data={xData} options={options} />
                            <div className='line-title'><b>现金比率</b></div>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className='chart-box'>
                            <LineChart data={zData} options={options} />
                            <div className='line-title'><b>资产负债率</b></div>
                        </div>
                    </Col>
                </Row>
                <Layout.Footer>
                    <div><b>流动比率：</b>表明企业每多一元有多少流动资产作为偿还保证，理想为2，过低偿还能力有限，过高闲置流资过多</div>
                    <div><b>速动比率：</b>短期内可变现资产偿还短期到账债务的能力，流动比率的补充，理想为1，大于1，短期偿债能力强，利降，小于1，依赖出售存货偿短债</div>
                    <div><b>现金比率：</b>企业立即偿还到期债务的能力</div>
                    <div><b>资产负债率：</b>经营活动的能力，反映债权人发放贷款的安全程度，理想为50%，说明有较好的偿还能力，又充分利用负债经营能力</div>
                </Layout.Footer>
            </Layout>
        )
    }
}