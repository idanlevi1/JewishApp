import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { styles } from "./styles";
import { Metric } from "../../themes";

export const EventCard = ({ onPress }) => (
  <TouchableOpacity style={styles.eventCardContainer} onPress={onPress}>
    <View style={styles.eventUserLine}>
      <View style={styles.torahImageContainer}>
        <Image
          source={require("../../assets/icon_torah.png")}
          style={styles.torahImage}
        />
      </View>
      <View style={styles.eventUserContainer}>
        <Image
          source={require("../../assets/icon_avatar.png")}
          style={styles.eventUserAvatar}
        />
        <View style={styles.eventUserDetail}>
          <Text style={styles.eventUserRole}>Speaker</Text>
          <Text style={styles.eventUserName}>Silvan Radeh Meiv</Text>
        </View>
      </View>
    </View>
    <View>
      <Text style={styles.eventTitle}>The Weekly Shiur - On the parasha</Text>
      <View style={styles.eventTimeView}>
        <Image
          source={require("../../assets/icon_event_time.png")}
          style={styles.eventTimeImage}
        />
        <Text style={styles.eventTimeText}>Today, 22:00</Text>
        <Image
          source={require("../../assets/icon_event_location.png")}
          style={styles.eventLocationImage}
        />
        <Text style={styles.eventTimeText}>King George 58, Jerusalem</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export const LessonCard = ({ onPress }) => (
  <TouchableOpacity style={styles.lessonCardContainer} onPress={onPress}>
    <View style={styles.lessonImageView}>
      <Image
        source={require("../../assets/icon_torah.png")}
        style={styles.lessonCardImage}
      />
    </View>
    <View style={styles.lessonDetailView}>
      <Text style={styles.lessonRoleText}>Speaker: Rabbi David Cohen</Text>
      <Text style={styles.lessonTitleText}>Derech Hashem</Text>
      <View style={styles.lessonLikeImageView}>
        <Image
          source={require("../../assets/icon_lesson_like.png")}
          style={styles.lessonLikeImage}
        />
        <Text style={styles.lessonLocationText}>23</Text>
      </View>
      <View style={styles.lessonCalendarImageView}>
        <Image
          source={require("../../assets/icon_lesson_calendar.png")}
          style={styles.lessonCalendarImage}
        />
        <Text style={styles.lessonLocationText}>Sunday 18:00</Text>
      </View>
      <View style={styles.lessonLocationImageView}>
        <Image
          source={require("../../assets/icon_lesson_location.png")}
          style={styles.lessonLocationImage}
        />
        <Text style={styles.lessonLocationText}>Jaffa 44</Text>
      </View>
    </View>
  </TouchableOpacity>
);
