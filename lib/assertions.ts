
import * as cdk from '@aws-cdk/core';
import { SynthUtils } from '@aws-cdk/assert/lib/synth-utils';

declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveError(message: string): R;
    }
  }
}

expect.extend({
  toHaveError(received: cdk.Stack, message) {
    const synthResult = SynthUtils.synthesize(received);
    let pass = true;
    let output = "Template has expected error.";

    const errors = synthResult.messages.filter(x => x.level == 'error');
    if (!errors.length) {
      output = "";
    }

    const hasErrorWithMessage = errors.some(x => x.entry.data == message);
    
   // pass = hasErrorWithMessage;
    return {
      pass, message: () => output
    }
    // var pass = synthResult.messages
    //     .filter(x => x.level == 'error')
    //     .some(x => x.entry.data == message);

    // if (pass) {
    //     return {
    //       pass,
    //       message: () => 'Template has expected error'
    //     };
    //   } else {
    //     return {
    //       pass,
    //       message: () => 'Template doesn not have expected error'
    //     };
    //   }
  }
})