/* eslint-disable radix */
import React, { useState } from 'react';
import { View } from 'react-native';
import s from './styles';

import { Root, Button, Text, H1, Icon } from 'native-base';
import IRManager from 'react-native-ir-manager';

import async from 'async';
import RNRestart from 'react-native-restart';

import { Col, Row, Grid } from 'react-native-easy-grid';

import PRONTO_CODES from '../../assets/panasonic_viera_pronto_codes.json';

const {
  POWER_ON_OFF,
  MUTE,
  MENU,
  RETURN,
  VOL_UP,
  VOL_DOWN,
  CH_UP,
  CH_DOWN,
  UP_ARROW,
  DOWN_ARROW,
  LEFT_ARROW,
  RIGHT_ARROW,
  OK,
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  ZERO,
  TV_VIDEO,
  EXIT,
} = PRONTO_CODES;

const Home: React.FC = () => {
  const [irEmitterCapable, setIrEmitterCapable] = useState(false);
  const hasIrEmitter = () => {
    // eslint-disable-next-line no-shadow
    IRManager.hasIrEmitter().then((hasIrEmitter: any) =>
      setIrEmitterCapable(hasIrEmitter),
    );
  };

  const transmitProntoCode = (prontoHexCode: string) => {
    IRManager.transmitProntoCode(prontoHexCode)
      .then(console.log)
      .catch(console.log);
  };

  /** Panasonic Plasma TV Discrete Remote Control Codes
   * http://www.awe-europe.com/documents/Control%20Docs/Panasonic/Panasonic%20plasma%20Discrete-remote-control-code.pdf
   */

  const zfill = (n: Number) => ('0000' + n).slice(-4);
  const nums = [
    'ZERO',
    'ONE',
    'TWO',
    'THREE',
    'FOUR',
    'FIVE',
    'SIX',
    'SEVEN',
    'EIGHT',
    'NINE',
  ];

  // const [isResetting, setIsResetting] = useState(false);
  const [count, setCount] = useState('');
  const resetPin = () => {
    const all_pins = Array.from(Array(9999).keys());

    async.eachSeries(
      all_pins,
      (item: any, callback: () => void) => {
        const pin = zfill(item);
        setCount(pin);
        const digits = pin.split('');

        async.eachSeries(
          digits,
          (d: string, kallback: () => void) => {
            IRManager.transmitProntoCode(PRONTO_CODES[nums[parseInt(d)]]);
            setTimeout(() => kallback(), 500);
          },
          (err: any) => {
            if (err) {
              console.log(err);
            }
          },
        );

        setTimeout(() => callback(), 2000);
      },
      (err: any) => {
        if (err) {
          console.log(err);
        }
      },
    );
  };

  hasIrEmitter();
  return (
    <Root>
      <View style={s.container}>
        {!irEmitterCapable ? (
          <H1>This device does not have IR Emitter Support</H1>
        ) : null}
        <View style={s.content}>
          <Grid>
            <Row>
              <Col style={s.col}>
                <Button
                  danger
                  style={s.button}
                  onPress={() => transmitProntoCode(POWER_ON_OFF)}>
                  <Icon name="power" style={s.icon} />
                </Button>
              </Col>
              <Col style={s.col}>
                <Button
                  style={s.button}
                  light
                  onPress={() => transmitProntoCode(MENU)}>
                  <Icon name="menu" style={s.icon} />
                </Button>
              </Col>
              <Col style={s.col}>
                <Button
                  style={s.button}
                  light
                  onPress={() => transmitProntoCode(RETURN)}>
                  <Icon name="return-down-back" style={s.icon} />
                </Button>
              </Col>
              <Col style={s.col}>
                <Button
                  style={s.button}
                  onPress={() => transmitProntoCode(MUTE)}>
                  <Icon name="volume-mute" style={s.icon} />
                </Button>
              </Col>
            </Row>
            <Row style={s.controls}>
              <Col style={s.col}>
                <Button
                  style={s.button}
                  onPress={() => transmitProntoCode(VOL_UP)}>
                  <Icon name="volume-high" style={s.icon} />
                </Button>
              </Col>
              <Col style={s.col}>
                <Button
                  style={s.button}
                  dark
                  onPress={() => transmitProntoCode(UP_ARROW)}>
                  <Icon name="chevron-up" style={s.icon} />
                </Button>
              </Col>
              <Col style={s.col}>
                <Button
                  style={s.button}
                  onPress={() => transmitProntoCode(CH_UP)}>
                  <Icon name="add" style={s.icon} />
                </Button>
              </Col>
            </Row>
            <Row style={s.controls}>
              <Col style={s.col}>
                <Button
                  style={s.button}
                  dark
                  onPress={() => transmitProntoCode(LEFT_ARROW)}>
                  <Icon name="chevron-back" style={s.icon} />
                </Button>
              </Col>
              <Col style={s.col}>
                <Button
                  style={s.button}
                  success
                  onPress={() => transmitProntoCode(OK)}>
                  <Icon name="radio-button-off" style={s.icon} />
                </Button>
              </Col>
              <Col style={s.col}>
                <Button
                  style={s.button}
                  dark
                  onPress={() => transmitProntoCode(RIGHT_ARROW)}>
                  <Icon name="chevron-forward" style={s.icon} />
                </Button>
              </Col>
            </Row>
            <Row style={s.controls}>
              <Col style={s.col}>
                <Button
                  style={s.button}
                  onPress={() => transmitProntoCode(VOL_DOWN)}>
                  <Icon name="volume-low" style={s.icon} />
                </Button>
              </Col>
              <Col style={s.col}>
                <Button
                  style={s.button}
                  dark
                  onPress={() => transmitProntoCode(DOWN_ARROW)}>
                  <Icon name="chevron-down" style={s.icon} />
                </Button>
              </Col>
              <Col style={s.col}>
                <Button
                  style={s.button}
                  onPress={() => transmitProntoCode(CH_DOWN)}>
                  <Icon name="remove" style={s.icon} />
                </Button>
              </Col>
            </Row>
            <Row>
              <Col style={s.col}>
                <Button
                  info
                  style={s.largeButton}
                  onPress={() => transmitProntoCode(ONE)}>
                  <Text>1</Text>
                </Button>
              </Col>
              <Col style={s.col}>
                <Button
                  info
                  style={s.largeButton}
                  onPress={() => transmitProntoCode(TWO)}>
                  <Text>2</Text>
                </Button>
              </Col>
              <Col style={s.col}>
                <Button
                  info
                  style={s.largeButton}
                  onPress={() => transmitProntoCode(THREE)}>
                  <Text>3</Text>
                </Button>
              </Col>
            </Row>
            <Row>
              <Col style={s.col}>
                <Button
                  info
                  style={s.largeButton}
                  onPress={() => transmitProntoCode(FOUR)}>
                  <Text>4</Text>
                </Button>
              </Col>
              <Col style={s.col}>
                <Button
                  info
                  style={s.largeButton}
                  onPress={() => transmitProntoCode(FIVE)}>
                  <Text>5</Text>
                </Button>
              </Col>
              <Col style={s.col}>
                <Button
                  info
                  style={s.largeButton}
                  onPress={() => transmitProntoCode(SIX)}>
                  <Text>6</Text>
                </Button>
              </Col>
            </Row>
            <Row>
              <Col style={s.col}>
                <Button
                  info
                  style={s.largeButton}
                  onPress={() => transmitProntoCode(SEVEN)}>
                  <Text>7</Text>
                </Button>
              </Col>
              <Col style={s.col}>
                <Button
                  info
                  style={s.largeButton}
                  onPress={() => transmitProntoCode(EIGHT)}>
                  <Text>8</Text>
                </Button>
              </Col>
              <Col style={s.col}>
                <Button
                  info
                  style={s.largeButton}
                  onPress={() => transmitProntoCode(NINE)}>
                  <Text>9</Text>
                </Button>
              </Col>
            </Row>
            <Row>
              <Col style={s.col}>
                <Button
                  light
                  style={s.largeButton}
                  onPress={() => transmitProntoCode(TV_VIDEO)}>
                  <Text>TV/VIDEO</Text>
                </Button>
              </Col>
              <Col style={s.col}>
                <Button
                  info
                  style={s.largeButton}
                  onPress={() => transmitProntoCode(ZERO)}>
                  <Text>0</Text>
                </Button>
              </Col>
              <Col style={s.col}>
                <Button
                  light
                  style={s.largeButton}
                  onPress={() => transmitProntoCode(EXIT)}>
                  <Text>EXIT</Text>
                </Button>
              </Col>
            </Row>
            <Row style={s.fullWidthRow}>
              <Button
                block
                danger
                onPress={() =>
                  count.length > 0 ? RNRestart.Restart() : resetPin()
                }>
                <Text>
                  {count.length > 0 ? 'STOP ' : ''} PIN Reset {count}
                </Text>
              </Button>
            </Row>
          </Grid>
        </View>
      </View>
    </Root>
  );
};

export default Home;
