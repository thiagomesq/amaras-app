export const ORGANIZATION_MANAGER_ADDRESS = '0x49307cee7abcd6568e91a07ba5535c0cd2857525';
export const ENTITY_MANAGER_ADDRESS = '0x88316de8c78c5dda9357300e04963f1f5b5ecbce';
export const ENTITY_TOKEN_ADDRESS = '0xa860aa22fc3f23a4a42646c26f6ca3813a534bdb';
export const CONTRIBUTION_ADDRESS = '0xa539e6f919dce20a77a3c08d717193c7eb5252cc';

export const CONTRIBUTION_ABI = {
  abi: [
    {
      type: 'constructor',
      inputs: [
        { name: 'orgManagerAddress', type: 'address', internalType: 'address' },
        { name: 'entityManagerAddress', type: 'address', internalType: 'address' },
        { name: 'entityTokenAddress', type: 'address', internalType: 'address' },
      ],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'contribute',
      inputs: [
        { name: 'orgAddress', type: 'address', internalType: 'address' },
        { name: 'entityId', type: 'uint256', internalType: 'uint256' },
      ],
      outputs: [],
      stateMutability: 'payable',
    },
    {
      type: 'function',
      name: 'owner',
      inputs: [],
      outputs: [{ name: '', type: 'address', internalType: 'address' }],
      stateMutability: 'view',
    },
    { type: 'function', name: 'renounceOwnership', inputs: [], outputs: [], stateMutability: 'nonpayable' },
    {
      type: 'function',
      name: 'transferOwnership',
      inputs: [{ name: 'newOwner', type: 'address', internalType: 'address' }],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'event',
      name: 'Contributed',
      inputs: [
        { name: 'contributor', type: 'address', indexed: true, internalType: 'address' },
        { name: 'orgAddress', type: 'address', indexed: true, internalType: 'address' },
        { name: 'entityId', type: 'uint256', indexed: true, internalType: 'uint256' },
        { name: 'amount', type: 'uint256', indexed: false, internalType: 'uint256' },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'OwnershipTransferred',
      inputs: [
        { name: 'previousOwner', type: 'address', indexed: true, internalType: 'address' },
        { name: 'newOwner', type: 'address', indexed: true, internalType: 'address' },
      ],
      anonymous: false,
    },
    { type: 'error', name: 'Contribution__InvalidContributionAmount', inputs: [] },
    { type: 'error', name: 'Contribution__TransferFailed', inputs: [] },
    { type: 'error', name: 'EntityManager__EntityNotRegistered', inputs: [] },
    { type: 'error', name: 'OrganizationManager__NotAnApprovedOrganization', inputs: [] },
    { type: 'error', name: 'OrganizationManager__OrganizationNotExists', inputs: [] },
    { type: 'error', name: 'OwnableInvalidOwner', inputs: [{ name: 'owner', type: 'address', internalType: 'address' }] },
    {
      type: 'error',
      name: 'OwnableUnauthorizedAccount',
      inputs: [{ name: 'account', type: 'address', internalType: 'address' }],
    },
    { type: 'error', name: 'ReentrancyGuardReentrantCall', inputs: [] },
  ],
} as const;

export const ENTITY_MANAGER_ABI = {
  abi: [
    {
      type: 'constructor',
      inputs: [{ name: 'orgManagerAddress', type: 'address', internalType: 'address' }],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'getEntityHash',
      inputs: [{ name: 'entityId', type: 'uint256', internalType: 'uint256' }],
      outputs: [{ name: '', type: 'bytes32', internalType: 'bytes32' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'getEntityMetadata',
      inputs: [{ name: 'entityId', type: 'uint256', internalType: 'uint256' }],
      outputs: [{ name: '', type: 'string', internalType: 'string' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'isRegisteredEntity',
      inputs: [{ name: 'entityId', type: 'uint256', internalType: 'uint256' }],
      outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'owner',
      inputs: [],
      outputs: [{ name: '', type: 'address', internalType: 'address' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'registerEntity',
      inputs: [
        { name: 'name', type: 'string', internalType: 'string' },
        { name: 'metadata', type: 'string', internalType: 'string' },
        { name: 'entityHash', type: 'bytes32', internalType: 'bytes32' },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    { type: 'function', name: 'renounceOwnership', inputs: [], outputs: [], stateMutability: 'nonpayable' },
    {
      type: 'function',
      name: 'setContributionContract',
      inputs: [{ name: '_contributionAddress', type: 'address', internalType: 'address' }],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'transferOwnership',
      inputs: [{ name: 'newOwner', type: 'address', internalType: 'address' }],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'updateEntityMetadata',
      inputs: [
        { name: 'entityId', type: 'uint256', internalType: 'uint256' },
        { name: 'metadata', type: 'string', internalType: 'string' },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'event',
      name: 'ContributionContractSet',
      inputs: [{ name: 'contributionContract', type: 'address', indexed: true, internalType: 'address' }],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'EntityMetadataUpdated',
      inputs: [
        { name: 'entityId', type: 'uint256', indexed: true, internalType: 'uint256' },
        { name: 'metadata', type: 'string', indexed: false, internalType: 'string' },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'EntityRegistered',
      inputs: [
        { name: 'entityId', type: 'uint256', indexed: true, internalType: 'uint256' },
        { name: 'orgAddress', type: 'address', indexed: true, internalType: 'address' },
        { name: 'dataHash', type: 'bytes32', indexed: false, internalType: 'bytes32' },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'OwnershipTransferred',
      inputs: [
        { name: 'previousOwner', type: 'address', indexed: true, internalType: 'address' },
        { name: 'newOwner', type: 'address', indexed: true, internalType: 'address' },
      ],
      anonymous: false,
    },
    { type: 'error', name: 'EntityManager__EntityNotRegistered', inputs: [] },
    { type: 'error', name: 'EntityManager__InvalidOrganizationManager', inputs: [] },
    { type: 'error', name: 'EntityManager__OrganizationNotApproved', inputs: [] },
    { type: 'error', name: 'EntityManager__UnauthorizedUser', inputs: [] },
    { type: 'error', name: 'OwnableInvalidOwner', inputs: [{ name: 'owner', type: 'address', internalType: 'address' }] },
    {
      type: 'error',
      name: 'OwnableUnauthorizedAccount',
      inputs: [{ name: 'account', type: 'address', internalType: 'address' }],
    },
    { type: 'error', name: 'ReentrancyGuardReentrantCall', inputs: [] },
  ],
} as const;

export const ENTITY_TOKEN_ABI = {
  abi: [
    {
      type: 'constructor',
      inputs: [{ name: '_entityManagerAddress', type: 'address', internalType: 'address' }],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'approve',
      inputs: [
        { name: 'to', type: 'address', internalType: 'address' },
        { name: 'tokenId', type: 'uint256', internalType: 'uint256' },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'assetToDataRecordHash',
      inputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
      outputs: [{ name: '', type: 'bytes32', internalType: 'bytes32' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'balanceOf',
      inputs: [{ name: 'owner', type: 'address', internalType: 'address' }],
      outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'getApproved',
      inputs: [{ name: 'tokenId', type: 'uint256', internalType: 'uint256' }],
      outputs: [{ name: '', type: 'address', internalType: 'address' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'getTokenIdByHash',
      inputs: [{ name: 'hashEntity', type: 'bytes32', internalType: 'bytes32' }],
      outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'hashToTokenId',
      inputs: [{ name: '', type: 'bytes32', internalType: 'bytes32' }],
      outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'i_contributionContract',
      inputs: [],
      outputs: [{ name: '', type: 'address', internalType: 'address' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'i_entityManager',
      inputs: [],
      outputs: [{ name: '', type: 'address', internalType: 'address' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'isApprovedForAll',
      inputs: [
        { name: 'owner', type: 'address', internalType: 'address' },
        { name: 'operator', type: 'address', internalType: 'address' },
      ],
      outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'name',
      inputs: [],
      outputs: [{ name: '', type: 'string', internalType: 'string' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'owner',
      inputs: [],
      outputs: [{ name: '', type: 'address', internalType: 'address' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'ownerOf',
      inputs: [{ name: 'tokenId', type: 'uint256', internalType: 'uint256' }],
      outputs: [{ name: '', type: 'address', internalType: 'address' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'renounceOwnership',
      inputs: [],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'safeMint',
      inputs: [
        { name: 'ownerAddress', type: 'address', internalType: 'address' },
        { name: 'hashEntity', type: 'bytes32', internalType: 'bytes32' },
        { name: 'tokenURI', type: 'string', internalType: 'string' },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'safeTransferFrom',
      inputs: [
        { name: 'from', type: 'address', internalType: 'address' },
        { name: 'to', type: 'address', internalType: 'address' },
        { name: 'tokenId', type: 'uint256', internalType: 'uint256' },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'safeTransferFrom',
      inputs: [
        { name: 'from', type: 'address', internalType: 'address' },
        { name: 'to', type: 'address', internalType: 'address' },
        { name: 'tokenId', type: 'uint256', internalType: 'uint256' },
        { name: 'data', type: 'bytes', internalType: 'bytes' },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'setApprovalForAll',
      inputs: [
        { name: 'operator', type: 'address', internalType: 'address' },
        { name: 'approved', type: 'bool', internalType: 'bool' },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'setContributionContract',
      inputs: [{ name: '_contributionAddress', type: 'address', internalType: 'address' }],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'supportsInterface',
      inputs: [{ name: 'interfaceId', type: 'bytes4', internalType: 'bytes4' }],
      outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'symbol',
      inputs: [],
      outputs: [{ name: '', type: 'string', internalType: 'string' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'tokenURI',
      inputs: [{ name: 'tokenId', type: 'uint256', internalType: 'uint256' }],
      outputs: [{ name: '', type: 'string', internalType: 'string' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'transferFrom',
      inputs: [
        { name: 'from', type: 'address', internalType: 'address' },
        { name: 'to', type: 'address', internalType: 'address' },
        { name: 'tokenId', type: 'uint256', internalType: 'uint256' },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'transferOwnership',
      inputs: [{ name: 'newOwner', type: 'address', internalType: 'address' }],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'event',
      name: 'Approval',
      inputs: [
        { name: 'owner', type: 'address', indexed: true, internalType: 'address' },
        { name: 'approved', type: 'address', indexed: true, internalType: 'address' },
        { name: 'tokenId', type: 'uint256', indexed: true, internalType: 'uint256' },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'ApprovalForAll',
      inputs: [
        { name: 'owner', type: 'address', indexed: true, internalType: 'address' },
        { name: 'operator', type: 'address', indexed: true, internalType: 'address' },
        { name: 'approved', type: 'bool', indexed: false, internalType: 'bool' },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'AssetLinkedToData',
      inputs: [
        { name: 'tokenId', type: 'uint256', indexed: true, internalType: 'uint256' },
        { name: 'hashEntity', type: 'bytes32', indexed: true, internalType: 'bytes32' },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'BatchMetadataUpdate',
      inputs: [
        { name: '_fromTokenId', type: 'uint256', indexed: false, internalType: 'uint256' },
        { name: '_toTokenId', type: 'uint256', indexed: false, internalType: 'uint256' },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'MetadataUpdate',
      inputs: [{ name: '_tokenId', type: 'uint256', indexed: false, internalType: 'uint256' }],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'OwnershipTransferred',
      inputs: [
        { name: 'previousOwner', type: 'address', indexed: true, internalType: 'address' },
        { name: 'newOwner', type: 'address', indexed: true, internalType: 'address' },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'Transfer',
      inputs: [
        { name: 'from', type: 'address', indexed: true, internalType: 'address' },
        { name: 'to', type: 'address', indexed: true, internalType: 'address' },
        { name: 'tokenId', type: 'uint256', indexed: true, internalType: 'uint256' },
      ],
      anonymous: false,
    },
    {
      type: 'error',
      name: 'ERC721IncorrectOwner',
      inputs: [
        { name: 'sender', type: 'address', internalType: 'address' },
        { name: 'tokenId', type: 'uint256', internalType: 'uint256' },
        { name: 'owner', type: 'address', internalType: 'address' },
      ],
    },
    {
      type: 'error',
      name: 'ERC721InsufficientApproval',
      inputs: [
        { name: 'operator', type: 'address', internalType: 'address' },
        { name: 'tokenId', type: 'uint256', internalType: 'uint256' },
      ],
    },
    {
      type: 'error',
      name: 'ERC721InvalidApprover',
      inputs: [{ name: 'approver', type: 'address', internalType: 'address' }],
    },
    {
      type: 'error',
      name: 'ERC721InvalidOperator',
      inputs: [{ name: 'operator', type: 'address', internalType: 'address' }],
    },
    {
      type: 'error',
      name: 'ERC721InvalidOwner',
      inputs: [{ name: 'owner', type: 'address', internalType: 'address' }],
    },
    {
      type: 'error',
      name: 'ERC721InvalidReceiver',
      inputs: [{ name: 'receiver', type: 'address', internalType: 'address' }],
    },
    {
      type: 'error',
      name: 'ERC721InvalidSender',
      inputs: [{ name: 'sender', type: 'address', internalType: 'address' }],
    },
    {
      type: 'error',
      name: 'ERC721NonexistentToken',
      inputs: [{ name: 'tokenId', type: 'uint256', internalType: 'uint256' }],
    },
    { type: 'error', name: 'EntityToken__TokenIdDoesNotExist', inputs: [] },
    { type: 'error', name: 'EntityToken__TokenIdNotFound', inputs: [] },
    { type: 'error', name: 'EntityToken__UnauthorizedUser', inputs: [] },
    {
      type: 'error',
      name: 'OwnableInvalidOwner',
      inputs: [{ name: 'owner', type: 'address', internalType: 'address' }],
    },
    {
      type: 'error',
      name: 'OwnableUnauthorizedAccount',
      inputs: [{ name: 'account', type: 'address', internalType: 'address' }],
    },
  ],
} as const;

export const ORGANIZATION_MANAGER_ABI = {
  abi: [
    { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
    {
      type: 'function',
      name: 'getOrganization',
      inputs: [{ name: 'orgAddress', type: 'address', internalType: 'address' }],
      outputs: [
        {
          name: '',
          type: 'tuple',
          internalType: 'struct OrganizationManager.Organization',
          components: [
            { name: 'name', type: 'string', internalType: 'string' },
            { name: 'wallet', type: 'address', internalType: 'address' },
            {
              name: 'status',
              type: 'uint8',
              internalType: 'enum OrganizationManager.OrganizationStatus',
            },
          ],
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'getOrganizationCount',
      inputs: [],
      outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'isApprovedOrganization',
      inputs: [{ name: 'orgAddress', type: 'address', internalType: 'address' }],
      outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'organizationAddresses',
      inputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
      outputs: [{ name: '', type: 'address', internalType: 'address' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'organizations',
      inputs: [{ name: '', type: 'address', internalType: 'address' }],
      outputs: [
        {
          name: 'name',
          type: 'string',
          internalType: 'string',
        },
        {
          name: 'wallet',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'status',
          type: 'uint8',
          internalType: 'enum OrganizationManager.OrganizationStatus',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'owner',
      inputs: [],
      outputs: [{ name: '', type: 'address', internalType: 'address' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'registerOrganization',
      inputs: [{ name: 'name', type: 'string', internalType: 'string' }],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    { type: 'function', name: 'renounceOwnership', inputs: [], outputs: [], stateMutability: 'nonpayable' },
    {
      type: 'function',
      name: 'setOrganizationStatus',
      inputs: [
        { name: 'orgAddress', type: 'address', internalType: 'address' },
        {
          name: 'status',
          type: 'uint8',
          internalType: 'enum OrganizationManager.OrganizationStatus',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'transferOwnership',
      inputs: [{ name: 'newOwner', type: 'address', internalType: 'address' }],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'event',
      name: 'OrganizationRegistered',
      inputs: [
        { name: 'orgAddress', type: 'address', indexed: true, internalType: 'address' },
        { name: 'name', type: 'string', indexed: false, internalType: 'string' },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'OrganizationStatusChanged',
      inputs: [
        { name: 'orgAddress', type: 'address', indexed: true, internalType: 'address' },
        {
          name: 'status',
          type: 'uint8',
          indexed: false,
          internalType: 'enum OrganizationManager.OrganizationStatus',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'OwnershipTransferred',
      inputs: [
        { name: 'previousOwner', type: 'address', indexed: true, internalType: 'address' },
        { name: 'newOwner', type: 'address', indexed: true, internalType: 'address' },
      ],
      anonymous: false,
    },
    { type: 'error', name: 'OrganizationManager__OrganizationAlreadyExists', inputs: [] },
    { type: 'error', name: 'OrganizationManager__OrganizationNotExists', inputs: [] },
    {
      type: 'error',
      name: 'OwnableInvalidOwner',
      inputs: [{ name: 'owner', type: 'address', internalType: 'address' }],
    },
    {
      type: 'error',
      name: 'OwnableUnauthorizedAccount',
      inputs: [{ name: 'account', type: 'address', internalType: 'address' }],
    },
    { type: 'error', name: 'ReentrancyGuardReentrantCall', inputs: [] },
  ],
} as const;