import { GoTop } from '.';


export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{height: '400vh'}}>
      <h1>Lorem ipsum niam iure quidem!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eligendi neque mollitia 
      repudiandae corrupti voluptatum molestias accusamus quis quaerat commodi quibusdam expedita ducimus 
      consequuntur ipsum ipsam, voluptates veniam iure quidem!
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eligendi neque mollitia 
      repudiandae corrupti voluptatum molestias accusamus quis quaerat commodi quibusdam expedita ducimus 
      consequuntur ipsum ipsam, voluptates veniam iure quidem!
      </p>
      <h1>Lorem ipsum niam iure quidem!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eligendi neque mollitia 
      repudiandae corrupti voluptatum molestias accusamus quis quaerat commodi quibusdam expedita ducimus 
      consequuntur ipsum ipsam, voluptates veniam iure quidem!
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eligendi neque mollitia 
      repudiandae corrupti voluptatum molestias accusamus quis quaerat commodi quibusdam expedita ducimus 
      consequuntur ipsum ipsam, voluptates veniam iure quidem!
      </p>
      <h1>Lorem ipsum niam iure quidem!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eligendi neque mollitia 
      repudiandae corrupti voluptatum molestias accusamus quis quaerat commodi quibusdam expedita ducimus 
      consequuntur ipsum ipsam, voluptates veniam iure quidem!
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eligendi neque mollitia 
      repudiandae corrupti voluptatum molestias accusamus quis quaerat commodi quibusdam expedita ducimus 
      consequuntur ipsum ipsam, voluptates veniam iure quidem!
      </p>
      <h1>Lorem ipsum niam iure quidem!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eligendi neque mollitia 
      repudiandae corrupti voluptatum molestias accusamus quis quaerat commodi quibusdam expedita ducimus 
      consequuntur ipsum ipsam, voluptates veniam iure quidem!
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eligendi neque mollitia 
      repudiandae corrupti voluptatum molestias accusamus quis quaerat commodi quibusdam expedita ducimus 
      consequuntur ipsum ipsam, voluptates veniam iure quidem!
      </p>
      <GoTop {...args} />
    </div>
  );
}

