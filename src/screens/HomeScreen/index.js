import { View, Text, Animated, Dimensions, Easing } from 'react-native'
import React, {useRef, useEffect, useState} from 'react'
import styles from "./styles"

const HomeScreen = () => {

    const screenWidth = Dimensions.get("screen").width;
    const screenHight = Dimensions.get("screen").height;
  
    const menuSize = useRef(new Animated.Value(0)).current;
    const [showBorder, setShowBorder] = useState(false);

    const animationConfig = {
        ballHeightRange: [10, 28],
        positionRange: [-9, 9],
        numberOfBalls: 40,
        marginHorizonal: 120,
        marginVertical: 40,
        velocityXrange: [0.1, 0.2],
        velocityYrange: [0.08, 0.20],
        pauseBetweenLoops: [8, 20]
    }

    
    const randomIntervalNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    };

    const ballSizeInPercent = (ballSize) => {
        let range = animationConfig.ballHeightRange[1] - animationConfig.ballHeightRange[0];
        let percOfRange = Math.floor((ballSize - animationConfig.ballHeightRange[0]) * 100 / range);
        return percOfRange;
    }

    const velocityBasedOnBallSizse = (ballSizePercent, velocityConfigArray, sign) => {
        let range = velocityConfigArray[1] - velocityConfigArray[0];
        let finalVelocity = range * ballSizePercent / 100 + velocityConfigArray[0];
        finalVelocity = finalVelocity.toFixed(2);
        if (sign === "-") {
            finalVelocity = finalVelocity * -1;
        }
        return finalVelocity;
    }

    let shortestArr = () => {
        let shortest = ballsArray.horizontal.length;
        if (ballsArray.vertical.length < ballsArray.horizontal.length) {
            shortest = ballsArray.vertical.length;
        }
        return shortest;
    }

    const createBalls = () => {

        const numberOfLoops = Math.ceil(animationConfig.numberOfBalls / 4);
        let returnArray = [];
        let returnArrayTop = [];
        let returnArrayBottom = [];

    

        for (let i = 0; i < numberOfLoops; i++) {


            //wall A

            let ballObject = new Object();

            let ballSize = randomIntervalNumber(animationConfig.ballHeightRange[0], animationConfig.ballHeightRange[1]);
            let positionVertical = randomIntervalNumber(animationConfig.positionRange[0], animationConfig.positionRange[1]) / 10;
            let ballSizePercent = ballSizeInPercent(ballSize);
            let velocityXbasedOnBallSize = velocityBasedOnBallSizse(ballSizePercent, animationConfig.velocityXrange, "+");
            let timeBetweenLoops = randomIntervalNumber(animationConfig.pauseBetweenLoops[0], animationConfig.pauseBetweenLoops[1]) * 1000;

            ballObject.positionX = useRef(new Animated.Value(screenWidth / -2 - animationConfig.marginVertical)).current;
            ballObject.positionY = useRef(new Animated.Value(screenHight / 2 * positionVertical)).current;
            ballObject.ballHeight = useRef(new Animated.Value(1)).current;
            ballObject.ballOpacity = useRef(new Animated.Value(1)).current;
            ballObject.height = ballSize;
            ballObject.velocityX = velocityXbasedOnBallSize;
            ballObject.velocityY = positionVertical / -10; 
            ballObject.borderColor = useRef(new Animated.Value(1)).current;
            ballObject.pause = timeBetweenLoops;

        
            returnArray.push(ballObject);

            //wall B

            ballObject = new Object();

            ballSize = randomIntervalNumber(animationConfig.ballHeightRange[0], animationConfig.ballHeightRange[1]);
            let positionHorizontal = randomIntervalNumber(animationConfig.positionRange[0], animationConfig.positionRange[1]) / 10;
            ballSizePercent = ballSizeInPercent(ballSize);
            let velocityYbasedOnBallSize = velocityBasedOnBallSizse(ballSizePercent, animationConfig.velocityYrange, "+");
            timeBetweenLoops = randomIntervalNumber(animationConfig.pauseBetweenLoops[0], animationConfig.pauseBetweenLoops[1]) * 1000;
            let positionOffset = numberOfLoops * animationConfig.ballHeightRange[1];

            ballObject.positionX = useRef(new Animated.Value(screenWidth / 2 * positionHorizontal)).current;
            ballObject.positionY = useRef(new Animated.Value(screenHight / -2 - animationConfig.marginHorizonal - positionOffset)).current;
            ballObject.ballHeight = useRef(new Animated.Value(1)).current;
            ballObject.ballOpacity = useRef(new Animated.Value(1)).current;
            ballObject.height = ballSize;
            ballObject.velocityX = positionHorizontal / -10;
            ballObject.velocityY = velocityYbasedOnBallSize;
            ballObject.borderColor = useRef(new Animated.Value(1)).current;
            ballObject.pause = timeBetweenLoops;

            returnArrayTop.push(ballObject);
            
            //wall C

            ballObject = new Object();

            ballSize = randomIntervalNumber(animationConfig.ballHeightRange[0], animationConfig.ballHeightRange[1]);
            positionVertical = randomIntervalNumber(animationConfig.positionRange[0], animationConfig.positionRange[1]) / 10;
            ballSizePercent = ballSizeInPercent(ballSize);
            velocityXbasedOnBallSize = velocityBasedOnBallSizse(ballSizePercent, animationConfig.velocityXrange, "-");
            timeBetweenLoops = randomIntervalNumber(animationConfig.pauseBetweenLoops[0], animationConfig.pauseBetweenLoops[1]) * 1000;

            ballObject.positionX = useRef(new Animated.Value(screenWidth / 2 + animationConfig.marginVertical)).current;
            ballObject.positionY = useRef(new Animated.Value(screenHight / 2 * positionVertical)).current;
            ballObject.ballHeight = useRef(new Animated.Value(1)).current;
            ballObject.ballOpacity = useRef(new Animated.Value(1)).current;
            ballObject.height = ballSize;
            ballObject.velocityX = velocityXbasedOnBallSize;
            ballObject.velocityY = positionVertical / -10; 
            ballObject.borderColor = useRef(new Animated.Value(1)).current;
            ballObject.pause = timeBetweenLoops;

            returnArray.push(ballObject);

            //wall D

            ballObject = new Object();

            ballSize = randomIntervalNumber(animationConfig.ballHeightRange[0], animationConfig.ballHeightRange[1]);
            positionHorizontal = randomIntervalNumber(animationConfig.positionRange[0], animationConfig.positionRange[1]) / 10;
            ballSizePercent = ballSizeInPercent(ballSize);
            velocityYbasedOnBallSize = velocityBasedOnBallSizse(ballSizePercent, animationConfig.velocityYrange, "-");
            timeBetweenLoops = randomIntervalNumber(animationConfig.pauseBetweenLoops[0], animationConfig.pauseBetweenLoops[1]) * 1000;
            positionOffset = numberOfLoops * animationConfig.ballHeightRange[1];

            ballObject.positionX = useRef(new Animated.Value(screenWidth / 2 * positionHorizontal)).current;
            ballObject.positionY = useRef(new Animated.Value(screenHight / 2 + animationConfig.marginHorizonal + positionOffset)).current;
            ballObject.ballHeight = useRef(new Animated.Value(1)).current;
            ballObject.ballOpacity = useRef(new Animated.Value(1)).current;
            ballObject.height = ballSize;
            ballObject.velocityX = positionHorizontal / -10;
            ballObject.velocityY = velocityYbasedOnBallSize;
            ballObject.borderColor = useRef(new Animated.Value(1)).current;
            ballObject.pause = timeBetweenLoops;

            returnArrayBottom.push(ballObject);
            
        }

        let sumBalls = returnArray.length + returnArrayTop.length + returnArrayBottom.length;

        let additionalBalls = sumBalls - animationConfig.numberOfBalls;

        returnArray.splice(returnArray.length - additionalBalls, additionalBalls)

        return {
            vertical: returnArray,
            horizontal: returnArrayTop,
            bottom: returnArrayBottom
        };
    }


    let ballsArray = createBalls();

    let shortest = shortestArr();

    
    const loopBallsArr = (i) => {
        
        for ( const key in ballsArray) {

            Animated.loop(
                
            Animated.parallel([
                Animated.timing(ballsArray[key][i].ballHeight, {
                    toValue: 0.1,
                    duration: 2800,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
                
                Animated.timing(ballsArray[key][i].ballOpacity, {
                    toValue: 0,
                    duration: 3000,
                    delay: 3000,
                    useNativeDriver: true            
                }),
                
                Animated.decay(ballsArray[key][i].positionX, {  
                    velocity: ballsArray[key][i].velocityX,
                    easing: Easing.linear,
                    deceleration: 0.999,
                    useNativeDriver: true
                }),
                
                Animated.decay(ballsArray[key][i].positionY, {
                    velocity: ballsArray[key][i].velocityY,
                    easing: Easing.linear,
                    deceleration: 0.999,
                    useNativeDriver: true
                }),
                
                Animated.timing(ballsArray[key][i].borderColor, {
                    toValue: 0,
                    duration: ballsArray[key][i].pause,
                    delay: 3000,
                    useNativeDriver: true            
                }),
                
            ])
            ).start();
        }

        

        i++;

        if (i < shortest) {
            
            setTimeout(() => {
                loopBallsArr(i);
            }, 1500)

        }
    }   
    

    useEffect(() => {


        setTimeout(() =>{
            setShowBorder(true);
        }, 1000)

        Animated.timing(menuSize, {
            toValue: 1,
            duration: 1200,
            easing: Easing.elastic(2.5),
            useNativeDriver: true
            }).start();

        let i = 0;

        loopBallsArr(i);


    }, [])



  return (
    <View style={styles.container}>

        
        <Animated.View style={[styles.menuContainer, {
            borderColor: showBorder ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
            transform: [
                {scaleX: menuSize},
                {scaleY: menuSize}
            ]
        }]}></Animated.View>

        {ballsArray.bottom.map( el => {
        
        return <Animated.View key={Math.random()} style={ [styles.blueBall, {
            height: el.height,
            width: el.height,

            transform: [
                {translateX: el.positionX},
                {translateY: el.positionY},
                {scaleY: el.ballHeight},
                {scaleX: el.ballHeight}
        
            ],
            borderRadius: el.ballHeight.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 100]
            }),
            opacity: el.ballOpacity} 
        ]
        
        }
        />
        })}

        {ballsArray.vertical.map( el => {
            
            return <Animated.View key={Math.random()} style={ [styles.blueBall, {
                height: el.height,
                width: el.height,

                transform: [
                    {translateX: el.positionX},
                    {translateY: el.positionY},
                    {scaleY: el.ballHeight},
                    {scaleX: el.ballHeight}
            
                ],
                borderRadius: el.ballHeight.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 100]
                }),
                opacity: el.ballOpacity} 
            ]
            
            }
            />
        })}
        {ballsArray.horizontal.map( el => {
        
            return <Animated.View key={Math.random()} style={ [styles.blueBall, {
                height: el.height,
                width: el.height,

                transform: [
                    {translateX: el.positionX},
                    {translateY: el.positionY},
                    {scaleY: el.ballHeight},
                    {scaleX: el.ballHeight}
            
                ],
                borderRadius: el.ballHeight.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 100]
                }),
                opacity: el.ballOpacity} 
            ]
            
            }
            />
        })}


           
    </View>
    
  )
}

export default HomeScreen