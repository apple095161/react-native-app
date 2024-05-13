import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Tabs, Redirect } from 'expo-router';

const TabsLayout = () => {
    return (
        <>
            <Tabs>
                <Tabs.Screen name='home'></Tabs.Screen>
                <Tabs.Screen name='prfile'></Tabs.Screen>
            </Tabs>
        </>
    );
}

const styles = StyleSheet.create({})

export default TabsLayout;
