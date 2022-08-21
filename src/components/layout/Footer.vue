<script setup>
import { storeToRefs } from 'pinia';
import { useObsConnectionStore } from '../../store/obsConnectionStore';

const { connected } = storeToRefs(useObsConnectionStore())
</script>

<template>
    <div class='footer'>
        <div class='footer-connection-status'>
            <div class='footer-connection-status-text'>
                <p>{{ connected ? 'Connected' : 'Disconnected' }}</p>
            </div>
            <div class='footer-connection-indicator' :class="connected ? 'indicator-success' : 'indicator-danger'"></div>
        </div>
    </div>
</template>