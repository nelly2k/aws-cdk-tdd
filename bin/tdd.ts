#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { TddStack } from '../lib/tdd-stack';

const app = new cdk.App();
new TddStack(app, 'TddStack');
