// This file contains translations for the entire website
// Each component can import these translations and use them based on the current language

const translations = {
  vi: {
    // Header translations
    header: {
      home: "Trang chủ",
      features: "Tính năng",
      architecture: "Kiến trúc",
      useCases: "Ứng dụng",
      documentation: "Tài liệu",
      contact: "Liên hệ"
    },
    
    // Hero section
    hero: {
      title: "Hạ tầng Blockchain Tài chính với Tuân thủ Tích hợp",
      subtitle: "Giải pháp Layer 2 chuyên biệt cho các giao dịch tài chính an toàn và tuân thủ với KYC/AML được tích hợp ngay trong giao thức",
      getStarted: "Bắt đầu",
      learnMore: "Tìm hiểu thêm",
      exploreSolution: "Khám phá Giải pháp",
      requestDemo: "Yêu cầu Demo"
    },
    
    // Transaction Simulator
    transactionSimulator: {
      title: "Blockchain Transaction Flow Simulator",
      subtitle: "Xem cách các giao dịch tài chính chảy qua blockchain FinLayer với tuân thủ KYC/AML tích hợp",
      description: "Kiến trúc của chúng tôi kết hợp dịch vụ tuân thủ AML bên thứ ba với xác thực DID trên chuỗi",
      currentStep: "Bước hiện tại",
      stepOf: "Bước {current} / {total}",
      next: "Tiếp theo",
      nodeHelp: "Nhấp vào bất kỳ nút nào trong sơ đồ để xem thông tin chi tiết về bước đó",
      controls: {
        play: "Phát",
        pause: "Tạm dừng",
        reset: "Đặt lại",
        speed: "Tốc độ"
      },
      steps: [
        { 
          id: 0, 
          name: 'Người dùng (Citizen)', 
          description: 'Ký giao dịch tài chính',
          details: 'Người dùng khởi tạo giao dịch tài chính và ký bằng khóa riêng tư của mình thông qua ví điện tử.'
        },
        { 
          id: 1, 
          name: 'Ví người dùng (Wallet)', 
          description: 'Gửi giao dịch đã ký',
          details: 'Ví điện tử gửi giao dịch đã được người dùng ký đến Proxy RPC để kiểm duyệt và xử lý.'
        },
        { 
          id: 2, 
          name: 'Proxy RPC', 
          description: 'Nhận và kiểm duyệt giao dịch',
          details: 'Proxy RPC nhận giao dịch và bắt đầu quá trình kiểm duyệt trước khi cho phép giao dịch được xử lý trên Layer 2.'
        },
        { 
          id: 3, 
          name: 'RiskScore + AML Compliance', 
          description: 'Kiểm tra tuân thủ bên thứ ba',
          details: 'Dịch vụ bên thứ ba (third-party service) thực hiện kiểm tra điểm rủi ro (Risk Score) và tuân thủ quy định chống rửa tiền (AML). Quá trình này hoạt động hoàn toàn off-chain để đối chiếu với cơ sở dữ liệu riêng, danh sách đen quốc tế và phân tích lịch sử giao dịch.'
        },
        { 
          id: 4, 
          name: 'DID Validator', 
          description: 'Kiểm tra DID on-chain',
          details: 'Smart contract DIDValidator được gọi để xác minh rằng ví của người dùng đã có DID (Decentralized Identifier) hợp lệ và được phép thực hiện giao dịch trên blockchain. Đây là quá trình xác thực diễn ra hoàn toàn on-chain.'
        },
        { 
          id: 5, 
          name: 'Chuyển tiếp giao dịch', 
          description: 'Proxy chuyển tiếp giao dịch đến Layer 2',
          details: 'Nếu giao dịch hợp lệ qua cả hai lớp kiểm tra, Proxy RPC sẽ chuyển tiếp đến nút L2 Geth để xử lý trên Layer 2 blockchain.'
        },
        { 
          id: 6, 
          name: 'L2 Geth Node', 
          description: 'Thực thi giao dịch trên Layer 2',
          details: 'Node L2 Geth thực thi giao dịch, cập nhật trạng thái và đưa giao dịch vào khối mới trên Layer 2. Đây là điểm bắt đầu của việc ghi nhận giao dịch vào chuỗi khối.'
        },
        { 
          id: 7, 
          name: 'CTC & SCC Contracts', 
          description: 'Ghi Merkle Root và State Root',
          details: 'Smart contracts CanonicalTransactionChain (CTC) và StateCommitmentChain (SCC) ghi lại Merkle Root của batch giao dịch và State Root mới. Đây là cầu nối giữa Layer 2 và Layer 1, đảm bảo tính toàn vẹn dữ liệu.'
        },
        { 
          id: 8, 
          name: 'Ethereum L1', 
          description: 'Cập nhật dữ liệu lên Layer 1',
          details: 'Root dữ liệu giao dịch và trạng thái được ghi lên Ethereum Layer 1, đảm bảo tính bảo mật, tính minh bạch và tính sẵn có của dữ liệu. Đây là bước cuối cùng khép lại quy trình xử lý giao dịch.'
        }
      ]
    },
    
    // Features section
    features: {
      title: "Tính năng chính",
      compliantBlockchain: {
        title: "Blockchain tuân thủ",
        description: "Tích hợp sẵn KYC/AML đảm bảo tuân thủ quy định tài chính"
      },
      scalable: {
        title: "Khả năng mở rộng",
        description: "Kiến trúc Layer 2 cho phép xử lý hàng nghìn giao dịch mỗi giây"
      },
      secure: {
        title: "Bảo mật cao",
        description: "Bảo vệ dữ liệu và tài sản số của bạn với công nghệ mã hóa tiên tiến"
      }
    },
    
    // Architecture
    architecture: {
      title: "Kiến trúc",
      description: "Hệ thống hai lớp với tuân thủ KYC/AML tích hợp",
      layers: {
        l1: "Layer 1: Bảo mật và trọng tài",
        l2: "Layer 2: Hiệu suất và khả năng mở rộng",
        kyc: "Mô-đun KYC/AML tích hợp",
        did: "Định danh phi tập trung (DID)"
      }
    },
    
    // Use Cases
    useCases: {
      title: "Ứng dụng",
      payments: {
        title: "Thanh toán",
        description: "Thanh toán nhanh chóng, an toàn và tuân thủ"
      },
      lending: {
        title: "Cho vay",
        description: "Nền tảng cho vay phi tập trung với xác minh danh tính"
      },
      digitalAssets: {
        title: "Tài sản số",
        description: "Quản lý tài sản số tuân thủ quy định"
      }
    },
    
    // Call to action
    callToAction: {
      title: "Bắt đầu với FinLayer",
      description: "Đăng ký ngay để bắt đầu xây dựng giải pháp blockchain tuân thủ",
      button: "Đăng ký trải nghiệm"
    },
    
    // Footer
    footer: {
      company: "© 2025 FinLayer. Bảo lưu mọi quyền.",
      links: {
        privacy: "Chính sách bảo mật",
        terms: "Điều khoản sử dụng",
        contact: "Liên hệ"
      }
    }
  },
  
  en: {
    // Header translations
    header: {
      home: "Home",
      features: "Features",
      architecture: "Architecture",
      useCases: "Use Cases",
      documentation: "Documentation",
      contact: "Contact"
    },
    
    // Hero section
    hero: {
      title: "Financial Blockchain Infrastructure with Built-in Compliance",
      subtitle: "A specialized Layer 2 solution for secure and compliant financial transactions with KYC/AML built right into the protocol",
      getStarted: "Get Started",
      learnMore: "Learn More",
      exploreSolution: "Explore Solution",
      requestDemo: "Request Demo"
    },
    
    // Transaction Simulator
    transactionSimulator: {
      title: "Blockchain Transaction Flow Simulator",
      subtitle: "See how financial transactions flow through the FinLayer blockchain with built-in KYC/AML compliance",
      description: "Our architecture integrates third-party AML compliance services with on-chain DID validation",
      currentStep: "Current Step",
      stepOf: "Step {current} of {total}",
      next: "Next",
      nodeHelp: "Click on any node in the diagram to view detailed information about that step",
      controls: {
        play: "Play",
        pause: "Pause",
        reset: "Reset",
        speed: "Speed"
      },
      steps: [
        { 
          id: 0, 
          name: 'User (Citizen)', 
          description: 'Sign financial transaction',
          details: 'User initiates a financial transaction and signs it with their private key through their digital wallet.'
        },
        { 
          id: 1, 
          name: 'User Wallet', 
          description: 'Submit signed transaction',
          details: 'Digital wallet sends the user-signed transaction to the Proxy RPC for validation and processing.'
        },
        { 
          id: 2, 
          name: 'Proxy RPC', 
          description: 'Receive and validate transaction',
          details: 'Proxy RPC receives the transaction and begins the validation process before allowing it to be processed on Layer 2.'
        },
        { 
          id: 3, 
          name: 'RiskScore + AML Compliance', 
          description: 'Third-party compliance check',
          details: 'Third-party service performs Risk Score evaluation and Anti-Money Laundering (AML) compliance checks. This process operates completely off-chain to cross-reference with proprietary databases, international blacklists, and transaction history analysis.'
        },
        { 
          id: 4, 
          name: 'DID Validator', 
          description: 'On-chain DID verification',
          details: 'DIDValidator smart contract is called to verify that the user wallet has a valid DID (Decentralized Identifier) and is permitted to perform transactions on the blockchain. This is a fully on-chain verification process.'
        },
        { 
          id: 5, 
          name: 'Forward Transaction', 
          description: 'Proxy forwards transaction to Layer 2',
          details: 'If the transaction is valid through both verification layers, the Proxy RPC forwards it to the L2 Geth node for processing on the Layer 2 blockchain.'
        },
        { 
          id: 6, 
          name: 'L2 Geth Node', 
          description: 'Execute transaction on Layer 2',
          details: 'L2 Geth node executes the transaction, updates the state, and includes the transaction in a new block on Layer 2. This is the starting point of recording the transaction on the blockchain.'
        },
        { 
          id: 7, 
          name: 'CTC & SCC Contracts', 
          description: 'Record Merkle Root and State Root',
          details: 'CanonicalTransactionChain (CTC) and StateCommitmentChain (SCC) smart contracts record the Merkle Root of the transaction batch and new State Root. This is the bridge between Layer 2 and Layer 1, ensuring data integrity.'
        },
        { 
          id: 8, 
          name: 'Ethereum L1', 
          description: 'Update data to Layer 1',
          details: 'Transaction data and state roots are recorded on Ethereum Layer 1, ensuring security, transparency, and data availability. This is the final step that completes the transaction processing flow.'
        }
      ]
    },
    
    // Features section
    features: {
      title: "Key Features",
      compliantBlockchain: {
        title: "Compliant Blockchain",
        description: "Built-in KYC/AML ensures compliance with financial regulations"
      },
      scalable: {
        title: "Scalable Architecture",
        description: "Layer 2 architecture enables thousands of transactions per second"
      },
      secure: {
        title: "Highly Secure",
        description: "Protect your digital assets with advanced encryption technology"
      }
    },
    
    // Architecture
    architecture: {
      title: "Architecture",
      description: "Two-layer system with integrated KYC/AML compliance",
      layers: {
        l1: "Layer 1: Security and arbitration",
        l2: "Layer 2: Performance and scalability",
        kyc: "Integrated KYC/AML module",
        did: "Decentralized Identity (DID)"
      }
    },
    
    // Use Cases
    useCases: {
      title: "Use Cases",
      payments: {
        title: "Payments",
        description: "Fast, secure and compliant payments"
      },
      lending: {
        title: "Lending",
        description: "Decentralized lending platforms with identity verification"
      },
      digitalAssets: {
        title: "Digital Assets",
        description: "Regulatory compliant digital asset management"
      }
    },
    
    // Call to action
    callToAction: {
      title: "Get Started with FinLayer",
      description: "Sign up now to start building compliant blockchain solutions",
      button: "Register for a Demo"
    },
    
    // Footer
    footer: {
      company: "© 2025 FinLayer. All rights reserved.",
      links: {
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        contact: "Contact"
      }
    }
  }
};

export default translations;
