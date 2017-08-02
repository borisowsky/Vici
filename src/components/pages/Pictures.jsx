import React, { Component } from 'react';
import q1А from '../../assets/img/question_1/А.jpg';
import q1Б from '../../assets/img/question_1/Б.jpg';
import q1В from '../../assets/img/question_1/В.jpg';
import q1Г from '../../assets/img/question_1/Г.jpg';

import q2А from '../../assets/img/question_2/А.jpg';
import q2Б from '../../assets/img/question_2/Б.jpg';
import q2В from '../../assets/img/question_2/В.jpg';
import q2Г from '../../assets/img/question_2/Г.jpg';

import q3А from '../../assets/img/question_3/А.jpg';
import q3Б from '../../assets/img/question_3/Б.jpg';
import q3В from '../../assets/img/question_3/В.jpg';
import q3Г from '../../assets/img/question_3/Г.jpg';

import q4А from '../../assets/img/question_4/А.jpg';
import q4Б from '../../assets/img/question_4/Б.jpg';
import q4В from '../../assets/img/question_4/В.jpg';
import q4Г from '../../assets/img/question_4/Г.jpg';

import q5А from '../../assets/img/question_5/А.jpg';
import q5Б from '../../assets/img/question_5/Б.jpg';
import q5В from '../../assets/img/question_5/В.jpg';
import q5Г from '../../assets/img/question_5/Г.jpg';

import q7Г from '../../assets/img/question_7/Г.jpg';

import q9А from '../../assets/img/question_9/А.jpg';
import q9Б from '../../assets/img/question_9/Б.jpg';
import q9В from '../../assets/img/question_9/В.jpg';
import q9Г from '../../assets/img/question_9/Г.jpg';

import q10А from '../../assets/img/question_10/А.jpg';
import q10Б from '../../assets/img/question_10/Б.jpg';
import q10В from '../../assets/img/question_10/В.jpg';
import q10Г from '../../assets/img/question_10/Г.jpg';

import q11А from '../../assets/img/question_11/А.jpg';
import q11Б from '../../assets/img/question_11/Б.jpg';
import q11В from '../../assets/img/question_11/В.jpg';
import q11Г from '../../assets/img/question_11/Г.jpg';

class Pictures extends Component {
  state = {
    question: this.props.number,
    question_1_images: [q1А, q1Б, q1В, q1Г],
    question_2_images: [q2А, q2Б, q2В, q2Г],
    question_3_images: [q3А, q3Б, q3В, q3Г],
    question_4_images: [q4А, q4Б, q4В, q4Г],
    question_5_images: [q5А, q5Б, q5В, q5Г],
    question_6_images: [],
    question_7_images: [q7Г],
    question_8_images: [],
    question_9_images: [q9А, q9Б, q9В, q9Г],
    question_10_images: [q10А, q10Б, q10В, q10Г],
    question_11_images: [q11А, q11Б, q11В, q11Г],
  }

  componentDidUpdate() {
    // FIXME: Возможно неправильные изображения - 3

    if (this.state.question === this.props.currentQuestion) {
      // $('.flipbook').turn('next');
    }
  }

  renderPictures = (question) => {
    return (
      <table>
        <tbody>
          <tr>
            <td>
              А. <img src={this.state[`question_${question}_images`][0]} alt="А" width="100%" />
            </td>
            <td>
              Б. <img src={this.state[`question_${question}_images`][1]} alt="Б" width="100%" />
            </td>
          </tr>

          <tr>
            <td>
              В. <img src={this.state[`question_${question}_images`][2]} alt="В" width="100%" />
            </td>
            <td>
              Г. <img src={this.state[`question_${question}_images`][3]} alt="Г" width="100%" />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div className="flipbook__page flipbook__page--description">
        <div className="flipbook__content">
          {this.renderPictures(this.state.question)}
        </div>
      </div>
    );
  }
}

export default Pictures;
